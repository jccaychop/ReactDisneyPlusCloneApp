import React from 'react';
import { Detail } from '../components';
import { genresES, serieCertificationUS } from './../utils/tmdbCodes';

const DetailContainer = React.memo(({ dataUsed, langSelected }) => {

    console.log("DATA USED : ", dataUsed);

    return (
        <Detail>
            <Detail.LeftSide>
                <Detail.Title>{dataUsed.name}</Detail.Title>
                <Detail.Overview>{dataUsed.overview}</Detail.Overview>
            </Detail.LeftSide>

            <Detail.RightSide>
                <Detail.Group>
                    <Detail.List>
                        <Detail.Item>
                            <Detail.ItemLabel>Duración:</Detail.ItemLabel>
                            <Detail.ItemText>{(dataUsed?.episodeRunTime.length === 0 ? '--' : dataUsed?.episodeRunTime[0] + ' min')}</Detail.ItemText>
                        </Detail.Item>

                        <Detail.Item>
                            <Detail.ItemLabel>Fecha de estreno:</Detail.ItemLabel>
                            <Detail.ItemText>{dataUsed.episodeFirstAirDate} - {dataUsed.episodeLastAirDate}</Detail.ItemText>
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
                            <Detail.ItemText><Detail.Rating src={serieCertificationUS[5].url} /></Detail.ItemText>
                        </Detail.Item>
                    </Detail.List>
                </Detail.Group>

                <Detail.Group>
                    <Detail.List>
                        <Detail.Item>
                            <Detail.ItemLabel>Creado por:</Detail.ItemLabel>
                            {/* <Detail.ItemText>{dataUsed.createdBy[0].name}</Detail.ItemText> */}
                            <Detail.ItemText>{(dataUsed.createdBy.length === 0 ? '--' : dataUsed.createdBy[0].name)}</Detail.ItemText>
                        </Detail.Item>

                        <Detail.Item>
                            <Detail.ItemLabel>Elenco:</Detail.ItemLabel>
                            <Detail.CastList>
                                {
                                    dataUsed.credits.cast.map((cast, index) => {
                                        if (index < 5) {
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
