import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Brand, ButtonSignUpV2 } from '../components';
import CollectionContainer from './collection';
import SpinnerContainer from './spinner';
import FooterContainer from './footer';
import { useScroll } from '../hooks/useScroll';

const BrandContainer = ({ langSelected, brandURLmedia, dataList, collectionList, brandPictures, siteData }) => {

    const { videoURL, bgURL, logoURL } = brandURLmedia;
    const [zIndex, setZIndex] = useState({});
    const [background, setBackground] = useState(false);
    const { buttons } = siteData;

    const [viewport] = useScroll();

    return (
        <>
            {
                (dataList.length === 0)
                    ? (<SpinnerContainer />)
                    : (
                        <>
                            <Brand viewport={viewport}>
                                <ReactPlayer
                                    url={videoURL}
                                    poster={bgURL}
                                    width="100%"
                                    height="auto"
                                    autoPlay
                                    playing={true}
                                    muted={true}
                                    volume={0}
                                    style={zIndex}
                                    onEnded={() => { setZIndex({ zIndex: -100 }); setBackground(true); }}
                                />

                                <Brand.Multimedia background={background}>
                                    <Brand.Image src={bgURL} viewport={viewport} />
                                    <Brand.Background />
                                </Brand.Multimedia>

                                <Brand.Section>
                                    <Brand.BrandLogo>
                                        <Brand.Logo src={logoURL} />

                                        <Brand.BrandButton>
                                            <ButtonSignUpV2 to="/signup">{buttons.signup}</ButtonSignUpV2>
                                        </Brand.BrandButton>
                                    </Brand.BrandLogo>

                                    <Brand.GroupCollection>

                                        <Brand.Collection>
                                            {
                                                collectionList.map((collection, i) => {
                                                    return (<CollectionContainer
                                                        key={i}
                                                        langSelected={langSelected}
                                                        collection={collection}
                                                        dataList={dataList}
                                                        brandPictures={brandPictures}
                                                    />)
                                                })
                                            }
                                        </Brand.Collection>

                                        <FooterContainer siteData={siteData} />
                                    </Brand.GroupCollection>
                                </Brand.Section>
                            </Brand>
                        </>
                    )
            }
        </>
    )
}

export default BrandContainer;

// https://www.npmjs.com/package/react-player