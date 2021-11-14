import React from 'react';
import { Detail } from '../components';
import { genresES, serieCertificationUS } from './../utils/tmdbCodes';

const DetailContainer = React.memo(({ dataUsed, mediaTYPE, langSelected }) => {

    const findDirector = (array) => {
        let result = array.find(arr => arr.job === "Director");
        if (typeof result === 'undefined') {
            result = "-"
        } else {
            result = result.name
        }
        return result;
    };

    return (
        <Detail>
            <Detail.LeftSide>
                <Detail.Title>{(mediaTYPE === 'series') ? dataUsed.name : dataUsed.title}</Detail.Title>
                <Detail.Overview>{dataUsed.overview}</Detail.Overview>
            </Detail.LeftSide>

            <Detail.RightSide>
                <Detail.Group>
                    <Detail.List>
                        <Detail.Item>
                            <Detail.ItemLabel>Duración:</Detail.ItemLabel>
                            {
                                (mediaTYPE === 'series')
                                    ? (<Detail.ItemText>{(dataUsed?.episodeRunTime.length === 0 ? '--' : dataUsed?.episodeRunTime[0] + ' min')}</Detail.ItemText>)
                                    : (<Detail.ItemText>{dataUsed?.runTime}</Detail.ItemText>)
                            }

                        </Detail.Item>

                        <Detail.Item>
                            <Detail.ItemLabel>Fecha de estreno:</Detail.ItemLabel>
                            {
                                (mediaTYPE === 'series')
                                    ? (
                                        <>
                                            {
                                                (dataUsed.numberSeasons === 1)
                                                    ? (<Detail.ItemText>{dataUsed.episodeFirstAirDate}</Detail.ItemText>)
                                                    : (<Detail.ItemText>{dataUsed.episodeFirstAirDate} - {dataUsed.episodeLastAirDate}</Detail.ItemText>)
                                            }
                                        </>
                                    )
                                    : (<Detail.ItemText>{dataUsed.releaseDate}</Detail.ItemText>)
                            }

                        </Detail.Item>

                        <Detail.Item>
                            <Detail.ItemLabel>Género:</Detail.ItemLabel>
                            {
                                dataUsed.genres.map((gen, index, array) => {

                                    return (
                                        <Detail.ItemText key={gen.id}>
                                            {(langSelected === 'es-MX' ? genresES[gen.id].name : gen.name)}{array.length - 1 === index ? '' : ', '}
                                        </Detail.ItemText>
                                    )
                                })
                            }
                        </Detail.Item>

                        <Detail.Item>
                            <Detail.ItemLabel>Clasificación:</Detail.ItemLabel>
                            {
                                (mediaTYPE === "series")
                                    ? (<Detail.ItemText><Detail.Rating src={dataUsed.contentRatings.url} alt={dataUsed.contentRatings.ratingValue} /></Detail.ItemText>)
                                    : (<Detail.ItemText><Detail.Rating src={dataUsed.releaseDates.url} alt={dataUsed.releaseDates.ratingValue} /></Detail.ItemText>)
                            }
                        </Detail.Item>
                    </Detail.List>
                </Detail.Group>

                <Detail.Group>
                    <Detail.List>
                        <Detail.Item>
                            <Detail.ItemLabel>{(mediaTYPE === 'series') ? 'Creado por:' : 'Dirigido por:'}</Detail.ItemLabel>
                            {
                                (mediaTYPE === 'series')
                                    ? (<Detail.ItemText>{(dataUsed.createdBy.length === 0 ? '--' : dataUsed.createdBy[0].name)}</Detail.ItemText>)
                                    : (<Detail.ItemText>{findDirector(dataUsed?.credits?.crew)}</Detail.ItemText>)
                            }
                        </Detail.Item>

                        <Detail.Item>
                            <Detail.ItemLabel>Elenco:</Detail.ItemLabel>
                            <Detail.CastList>
                                {
                                    dataUsed.credits.cast.map((cast, index) => {
                                        if (index < 7) {
                                            return <Detail.CastItem key={cast.id}>{cast.name}</Detail.CastItem>
                                        }
                                    })
                                }
                            </Detail.CastList>
                        </Detail.Item>
                    </Detail.List>
                </Detail.Group>
            </Detail.RightSide>
        </Detail>
    )
})

export default DetailContainer;
