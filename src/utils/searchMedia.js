import { concatBrands } from "./genreListByMedia";

export const searchMediaByTitle = (dataSource, word) => {
    const source = concatBrands(dataSource);
    const filtered = source.filter(element => {
        return (
            element['media_type'] === "movie"
                ? (element['original_title'].toUpperCase().includes(word.toUpperCase()) || element['title'].toUpperCase().includes(word.toUpperCase()))
                : (element['name'].toUpperCase().includes(word.toUpperCase()) || element['original_name'].toUpperCase().includes(word.toUpperCase()))
        )
    });
    return filtered;
};

export const exploreMedia = (dataSource) => {
    const source = concatBrands(dataSource);
    let indexList = [];

    if (source.length !== 0) {
        let temp = [];
        for (let index = 0; index < 100; index++) {
            const element = Math.floor(Math.random() * source.length);
            temp.push(element);
        }
        let final = [...new Set(temp)];
        final.length = 80;

        final.forEach(element => {
            let item = source[element];
            indexList.push(item);
        })
    }
    return indexList;
};
