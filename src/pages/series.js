import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContentContainer from '../containers/content';
import { concatBrands, listByMediaTypeFilteredProperties } from '../utils/genreListByMedia';
import { genresEN, genresES } from '../utils/tmdbCodes';
import SpinnerContainer from './../containers/spinner';

const Series = ({ siteData }) => {

    const [mediaList, setMediaList] = useState(null);
    const langSelected = useSelector(state => state.lang.language);
    const brandContent = useSelector(state => state.brand.brandList);
    const brandIdGenre = useSelector(state => state.brand.idGenreSerie);

    const genreNames = (langSelected === "es-MX") ? genresES : genresEN;

    useEffect(() => {
        let mediaListTotal = concatBrands(brandContent);
        let mediaListFilter = listByMediaTypeFilteredProperties(mediaListTotal, 'tv');
        setMediaList(mediaListFilter);
    }, [brandContent]);

    return (
        <>
            {
                (brandIdGenre === null || brandContent === null || mediaList === null || mediaList?.length === 0)
                    ? <SpinnerContainer />
                    : (
                        <ContentContainer
                            title={siteData.media.serie}
                            url="/series"
                            pictureID={(langSelected === "es-MX") ? 0 : 1}
                            siteData={siteData}
                            brandIdGenre={brandIdGenre}
                            genreNames={genreNames}
                            mediaList={mediaList}
                        />
                    )
            }
        </>
    )
}

export default Series;
//https://www.youtube.com/watch?v=RMVq9GwMoGE