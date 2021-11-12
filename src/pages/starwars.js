import React from 'react';
import { useSelector } from 'react-redux';
import { Site } from '../components';
import BrandContainer from '../containers/brand';
import SiteContainer from '../containers/site';
import SpinnerContainer from '../containers/spinner';
import { pictureStarWars } from '../utils/brandPictures';
import { brandStarWars } from '../utils/brandURLmedia';
import { siteContent } from '../utils/siteContent';

const StarWars = () => {

    const loading = useSelector(state => state.brand.loading);

    const langSelected = useSelector(state => state.lang.language);
    const brandContent = useSelector(state => state.brand.brandList.brandStarWars);
    const { data, collection } = brandContent;
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];

    return (
        <>
            {
                loading
                    ? (<SpinnerContainer />)
                    : (
                        <SiteContainer>
                            <Site.Content>
                                <Site.Background />

                                <BrandContainer
                                    langSelected={langSelected}
                                    brandURLmedia={brandStarWars}
                                    dataList={data}
                                    collectionList={collection}
                                    brandPictures={pictureStarWars}
                                    siteData={siteData}
                                />
                            </Site.Content>
                        </SiteContainer>
                    )
            }
        </>
    )
}

export default StarWars;
