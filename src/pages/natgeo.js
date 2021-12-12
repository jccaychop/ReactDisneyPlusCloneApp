import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Site } from '../components';
import BrandContainer from '../containers/brand';
import SiteContainer from '../containers/site';
import SpinnerContainer from '../containers/spinner';
import { pictureNatGeo } from '../utils/brandPictures';
import { brandNatGeo } from '../utils/brandURLmedia';
import { siteContent } from '../utils/siteContent';

const NatGeo = () => {

    const loading = useSelector(state => state.brand.loading);

    const langSelected = useSelector(state => state.lang.language);
    const brandContent = useSelector(state => state.brand.brandList.brandNatGeo);
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
                                    brandURLmedia={brandNatGeo}
                                    dataList={data}
                                    collectionList={collection}
                                    brandPictures={pictureNatGeo}
                                    siteData={siteData}
                                />
                            </Site.Content>
                        </SiteContainer>
                    )
            }
        </>
    )
}

export default NatGeo;
