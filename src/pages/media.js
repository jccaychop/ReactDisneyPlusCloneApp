import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { Site } from '../components';
import MediaContainer from '../containers/media';
import SiteContainer from '../containers/site';
import SpinnerContainer from '../containers/spinner';
import { getAllEpisodesBySeason, getContentById } from '../services/tmdb';
import { siteContent } from '../utils/siteContent';
import { pictureTotalBrands } from '../utils/brandPictures';
import { mediaIdVerificationByMediaType } from '../utils/mediaIdVerificationByMediaType';

const Media = ({ viewport }) => {

    const [content, setContent] = useState({
        data: {},
        loading: true,
        error: false,
        verification: null,
    });

    // mediaTYPE => series or movies
    const { mediaTYPE, mediaID } = useParams();

    const langSelected = useSelector(state => state.lang.language);
    const brandList = useSelector(state => state.brand.brandList);
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];

    useEffect(() => {

        const { brandStarWars, brandDisney, brandMarvel, brandNatGeo, brandPixar } = brandList;
        const brandDataArray = [...brandStarWars.data, ...brandDisney.data, ...brandMarvel.data, ...brandNatGeo.data, ...brandPixar.data];

        if (brandDataArray.length !== 0) {

            const verification = mediaIdVerificationByMediaType(brandDataArray, mediaTYPE, mediaID);

            if (verification === true) {

                let totalSeasons;

                getContentById(mediaID, mediaTYPE, langSelected)
                    .then(data => {
                        if (data?.success === false) {
                            // error
                            setContent({
                                ...content,
                                error: true,
                            })
                        }
                        else if (mediaTYPE === "series") {  // SERIES VERIFICATION
                            totalSeasons = data['number_of_seasons'];

                            let episodesBySeasons = [];

                            for (let index = 0; index < totalSeasons; index++) {
                                const episodes = new Promise((resolve, reject) => {
                                    resolve(
                                        getAllEpisodesBySeason(mediaID, (index + 1), langSelected)
                                    );
                                });
                                episodesBySeasons.push(episodes);
                            }

                            Promise.all(episodesBySeasons).then(values => {
                                const newData = {
                                    ...data,
                                    episodeList: values,
                                };

                                setContent({
                                    ...content,
                                    data: newData,
                                    loading: false,
                                    verification: true,
                                })
                            });
                        }
                        else { // MOVIES
                            setContent({
                                ...content,
                                data: data,
                                loading: false,
                                verification: true,
                            });
                        }
                    });
            } else {
                setContent({
                    ...content,
                    verification: false,
                });
            }
        }
    }, [mediaID, mediaTYPE, langSelected, brandList]);

    // ERROR REDIRECT
    if (content.error) {
        return <Redirect to="/" />
    }

    if (content.verification === false) {
        console.log("ENVIAR A OTRA PAGINA DE ERROR o mostrar una ventana con error");
    }

    return (
        <>
            {
                content.loading
                    ? (<SpinnerContainer />)
                    : (
                        <SiteContainer>
                            <Site.Content>
                                <Site.Background />
                                <MediaContainer
                                    mediaTYPE={mediaTYPE}
                                    content={content}
                                    siteData={siteData}
                                    brandPictures={pictureTotalBrands}
                                    langSelected={langSelected}
                                    viewport={viewport}
                                />
                            </Site.Content>
                        </SiteContainer>
                    )
            }
        </>
    )
}

export default Media;
