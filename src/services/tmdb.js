import { TOKEN_TMDB, URL_TMDB_V3, URL_TMDB_V4 } from "../environments/environments";

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

export const getContentById = async (contentID, mediaType, lang) => {
    const mediaTypeFinal = mediaType === 'series' ? 'tv' : 'movie';
    const peticion = await fetch(`${URL_TMDB_V3}/${mediaTypeFinal}/${contentID}?language=${lang}&append_to_response=credits,videos,release_dates,content_ratings&include_video_language=null,es`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${TOKEN_TMDB}`,
        }
    });
    const data = await peticion.json();
    return data;
};

export const getAllEpisodesBySeason = async (contentID, seasonNumber, lang) => {
    const peticion = await fetch(`${URL_TMDB_V3}/tv/${contentID}/season/${seasonNumber}?language=${lang}&append_to_response=videos,episode_run_time`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${TOKEN_TMDB}`,
        }
    });
    const data = await peticion.json();
    return data;
};
