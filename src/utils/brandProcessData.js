import { getList } from "../services/tmdb";
import { collectionVerification } from "./collectionVerification";

export const getAllBrands = async (brandSource, language) => {

    const { brandStarWars, brandDisney, brandMarvel, brandNatGeo, brandPixar } = brandSource;

    // LOCAL STORAGE
    const languageLS = localStorage.getItem('language');
    const brandsLS = JSON.parse(localStorage.getItem('brands'));

    // GET FIRST PAGE
    const starWars = await getList(brandStarWars.idList, 1, language);
    const disney = await getList(brandDisney.idList, 1, language);
    const marvel = await getList(brandMarvel.idList, 1, language);
    const natGeo = await getList(brandNatGeo.idList, 1, language);
    const pixar = await getList(brandPixar.idList, 1, language);

    if (
        languageLS === null ||
        brandsLS === null ||
        languageLS !== language ||
        brandsLS?.brandStarWars?.totalResults !== starWars.total_results ||
        brandsLS?.brandDisney?.totalResults !== disney.total_results ||
        brandsLS?.brandMarvel?.totalResults !== marvel.total_results ||
        brandsLS?.brandNatGeo?.totalResults !== natGeo.total_results ||
        brandsLS?.brandPixar?.totalResults !== pixar.total_results ||
        brandStarWars.totalResults !== starWars.total_results ||
        brandDisney.totalResults !== disney.total_results ||
        brandMarvel.totalResults !== marvel.total_results ||
        brandNatGeo.totalResults !== natGeo.total_results ||
        brandPixar.totalResults !== pixar.total_results
    ) {
        // ARRAY PROMISES
        const promiseStarWars = iterablePromise(brandStarWars, starWars, language);
        const promiseDisney = iterablePromise(brandDisney, disney, language);
        const promiseMarvel = iterablePromise(brandMarvel, marvel, language);
        const promiseNatGeo = iterablePromise(brandNatGeo, natGeo, language);
        const promisePixar = iterablePromise(brandPixar, pixar, language);

        // ALL PROMISES
        const promiseAllStarWars = await Promise.all(promiseStarWars);
        const promiseAllDisney = await Promise.all(promiseDisney);
        const promiseAllMarvel = await Promise.all(promiseMarvel);
        const promiseAllNatGeo = await Promise.all(promiseNatGeo);
        const promiseAllPixar = await Promise.all(promisePixar);

        const dataBrandStarwars = itemsBrand(promiseAllStarWars, starWars);
        const dataBrandDisney = itemsBrand(promiseAllDisney, disney);
        const dataBrandMarvel = itemsBrand(promiseAllMarvel, marvel);
        const dataBrandNatGeo = itemsBrand(promiseAllNatGeo, natGeo);
        const dataBrandPixar = itemsBrand(promiseAllPixar, pixar);

        // VERIFICATION
        const verificatedCollectionBrandStarWars = collectionVerification(dataBrandStarwars, brandStarWars.collection);
        const verificatedCollectionBrandDisney = collectionVerification(dataBrandDisney, brandDisney.collection);
        const verificatedCollectionBrandMarvel = collectionVerification(dataBrandMarvel, brandMarvel.collection);
        const verificatedCollectionBrandNatGeo = collectionVerification(dataBrandNatGeo, brandNatGeo.collection);
        const verificatedCollectionBrandPixar = collectionVerification(dataBrandPixar, brandPixar.collection);

        const dataFinal = {
            brandStarWars: {
                ...brandStarWars,
                totalResults: starWars.total_results,
                data: dataBrandStarwars,
                collection: verificatedCollectionBrandStarWars,
            },
            brandDisney: {
                ...brandDisney,
                totalResults: disney.total_results,
                data: dataBrandDisney,
                collection: verificatedCollectionBrandDisney,
            },
            brandMarvel: {
                ...brandMarvel,
                totalResults: marvel.total_results,
                data: dataBrandMarvel,
                collection: verificatedCollectionBrandMarvel,
            },
            brandNatGeo: {
                ...brandNatGeo,
                totalResults: natGeo.total_results,
                data: dataBrandNatGeo,
                collection: verificatedCollectionBrandNatGeo,
            },
            brandPixar: {
                ...brandPixar,
                totalResults: pixar.total_results,
                data: dataBrandPixar,
                collection: verificatedCollectionBrandPixar,
            },
        }

        localStorage.setItem('language', language);
        localStorage.setItem('brands', JSON.stringify(dataFinal));
        
        return dataFinal;

    } else {
        return brandsLS;
    }

};

const iterablePromise = (brandNameContent, brandFirstPageContent, language) => {

    let promiseArray = [];

    for (let index = 1; index < brandFirstPageContent.total_pages; index++) {
        const items = new Promise((resolve, reject) => {
            resolve(
                getList(brandNameContent.idList, (index + 1), language)
            );
        });

        promiseArray.push(items);
    }

    return promiseArray;
};

const itemsBrand = (promiseAll, firstPage) => {
    let temporal = { ...firstPage };
    let concatArray = [...temporal.results];

    promiseAll.forEach(content => {
        concatArray = concatArray.concat(content.results);
    });

    return concatArray;
};
