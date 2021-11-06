import { intersection } from 'underscore';

export const collectionVerification = (fetchedArray, collectionArray) => {

    const tempFetchedArray = [...fetchedArray];
    const tempCollectionArray = [...collectionArray];

    const fetchedArrayID = tempFetchedArray.map(e => e.id);
    let newCollectionArray = [];

    tempCollectionArray.forEach(collection => {
        const tempList = intersection(fetchedArrayID, collection.list);
        newCollectionArray.push({
            ...collection,
            list: tempList,
        });
    });

    return newCollectionArray;
};
