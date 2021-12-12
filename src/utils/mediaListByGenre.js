export const mediaListByGenre = (mediaList, genreID) => {
    return mediaList.filter(element => element['genre_ids'].includes(genreID) === true);
};
