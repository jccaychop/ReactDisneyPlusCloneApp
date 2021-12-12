import { types } from "../types/types";

export const setBrandListAction = (list) => ({
    type: types.brandSetBrandList,
    payload: list,
});

export const setGenreListSerieAction = (list) => ({
    type: types.brandSetGenreListSerie,
    payload: list,
});

export const setGenreListMovieAction = (list) => ({
    type: types.brandSetGenreListMovie,
    payload: list,
});

export const startFetching = () => ({
    type: types.brandStartFetching,
});

export const finishFetching = () => ({
    type: types.brandFinishFetching,
});
