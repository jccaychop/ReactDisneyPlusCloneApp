import { TOKEN_TMDB, URL_TMDB_V4 } from "../environments/environments";

export const getList = async (idList, page, lang) => {
    const peticion = await fetch(`${URL_TMDB_V4}/${idList}?page=${page}&language=${lang}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${TOKEN_TMDB}`,
        }
    });

    const data = await peticion.json();
    return data;
};
