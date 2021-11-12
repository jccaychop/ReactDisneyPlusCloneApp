import { types } from "../types/types";

const initialState = {
    language: localStorage.getItem('language') === null ? 'es-MX' : localStorage.getItem('language'),
    loading: false,
};

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.languageChange:
            return {
                ...state,
                language: action.payload,
            }

        case types.languageStartLoading:
            return {
                ...state,
                loading: true,
            }

        case types.languageFinishLoading:
            return {
                ...state,
                loading: false,
            }

        default:
            return state;
    }
};
