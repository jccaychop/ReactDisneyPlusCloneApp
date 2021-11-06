import { types } from "../types/types";

const initialState = {
    language: 'es-MX',
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
