import { starWarsCollection, disneyCollection, marvelCollection, natGeoCollection, pixarCollection } from './../utils/brandCollectionBase';
import { types } from '../types/types';

const initialState = {
    loading: false,
    brandList: {
        brandStarWars: {
            idList: 7111055,
            totalResults: 30,
            data: [],
            collection: starWarsCollection,
        },
        brandDisney: {
            idList: 7111059,
            totalResults: 134,
            data: [],
            collection: disneyCollection,
        },
        brandMarvel: {
            idList: 7110982,
            totalResults: 72,
            data: [],
            collection: marvelCollection,
        },
        brandNatGeo: {
            idList: 7111051,
            totalResults: 62,
            data: [],
            collection: natGeoCollection,
        },
        brandPixar: {
            idList: 7111058,
            totalResults: 100,
            data: [],
            collection: pixarCollection,
        },
    },
};

export const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.brandStartFetching:
            return {
                ...state,
                loading: true,
            }

        case types.brandFinishFetching:
            return {
                ...state,
                loading: false,
            }

        case types.brandSetBrandList:
            return {
                ...state,
                brandList: action.payload,
            }

        default:
            return state;
    }
};
