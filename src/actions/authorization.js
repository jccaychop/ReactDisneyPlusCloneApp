import { types } from './../types/types';

export const Login = (uid, email) => ({
    type: types.authorizationLogin,
    payload: { uid, email },
});

export const Logout = () => ({
    type: types.authorizationLogout,
});

export const EmailExist = (email) => ({
    type: types.authorizationEmail,
    payload: { email }
});

export const PassError = (value) => ({
    type: types.authorizationPassError,
    payload: { value },
});
