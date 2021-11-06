import { types } from "../types/types";

export const changeLanguageAction = (lang) => ({
    type: types.languageChange,
    payload: lang,
});

export const startLanguageLoading = () => ({
    type: types.languageStartLoading,
});

export const finishLanguageLoading = () => ({
    type: types.languageFinishLoading,
});
