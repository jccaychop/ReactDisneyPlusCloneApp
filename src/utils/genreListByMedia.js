export const genreListByMedia = (dataSource, mediaType) => {
    const arrayData = concatBrands(dataSource);
    const filterByMediaType = listByMediaType(arrayData, mediaType).map(element => element['genre_ids']);
    let filterID = filterByMediaType.join(',').split(',').map(element => +element).sort(function (a, b) { return a - b });
    let uniqueIDs = [...new Set(filterID)];
    return uniqueIDs.filter(element => element !== 0);
};

export const concatBrands = (dataSource) => {
    const { brandStarWars, brandDisney, brandMarvel, brandNatGeo, brandPixar } = dataSource;
    const arrayStarWars = brandStarWars.data;
    const arrayDisney = brandDisney.data;
    const arrayMarvel = brandMarvel.data;
    const arrayNatGeo = brandNatGeo.data;
    const arrayPixar = brandPixar.data;

    let newArray = arrayStarWars.concat(arrayDisney).concat(arrayMarvel).concat(arrayNatGeo).concat(arrayPixar);
    return newArray;
};

export const listByMediaType = (array, mediaType) => {
    return array.filter(element => element['media_type'] === mediaType);
};

export const listByMediaTypeFilteredProperties = (array, mediaType) => {
    return array.filter(element => element['media_type'] === mediaType).map(element => {
        return {
            id: element.id,
            genre_ids: element['genre_ids'],
        }
    });
};
