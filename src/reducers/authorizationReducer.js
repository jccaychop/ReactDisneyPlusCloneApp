import { types } from './../types/types';

const initialState = {
    uid: null,
    email: "",
    passError: false,
};

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authorizationLogin:
            return {
                ...state,
                uid: action.payload.uid,
                email: action.payload.email,
                passError: false,
            };

        case types.authorizationLogout:
            return initialState;

        case types.authorizationEmail:
            return {
                ...state,
                email: action.payload.email,
            }

        case types.authorizationPassError:
            return {
                ...state,
                passError: action.payload.value,
            }

        default:
            return state;;
    }
};
