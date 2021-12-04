import { Login, Logout, PassError } from '../actions/authorization';
import { auth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword, signOut } from './firebaseConfig';

export const firebaseRegisterUser = (obj) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorCode : ", errorCode);
            console.log("errorMessage : ", errorMessage);
        })
};

export const firebaseCheckEmailExists = async (email) => {
    const exists = await fetchSignInMethodsForEmail(auth, email);
    return exists.length === 0 ? false : true;
};

export const firebaseLoginUser = (obj) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(Login(user.uid, user.email));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("errorCode : ", errorCode);
                console.log("errorMessage : ", errorMessage);
                dispatch(PassError(true));
            })
    }
};

export const firebaseLogout = () => {
    return (dispatch) => {
        signOut(auth)
            .then(result => {
                dispatch(Logout());
            })
            .catch(e => {
                console.error(e)
            })
    }
};
