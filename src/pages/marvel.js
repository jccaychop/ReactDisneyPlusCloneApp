import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Site } from '../components';
import BrandContainer from '../containers/brand';
import SiteContainer from '../containers/site';
import SpinnerContainer from '../containers/spinner';
import { pictureMarvel } from '../utils/brandPictures';
import { brandMarvel } from '../utils/brandURLmedia';
import { siteContent } from '../utils/siteContent';

const Marvel = () => {

    const loading = useSelector(state => state.brand.loading);

    const langSelected = useSelector(state => state.lang.language);
    const brandContent = useSelector(state => state.brand.brandList.brandMarvel);
    const { data, collection } = brandContent;
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                    brandURLmedia={brandMarvel}
                                    dataList={data}
                                    collectionList={collection}
                                    brandPictures={pictureMarvel}
                                    siteData={siteData}
                                />
                            </Site.Content>
                        </SiteContainer>
                    )
            }
        </>
    )
}

export default Marvel;
