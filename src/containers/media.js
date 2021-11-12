import React from 'react';
import { Media, SVGgroupWatch, SVGplay } from '../components';
import { URL_PICTURE } from '../environments/environments';
import { genresES, serieCertificationUS, movieCertificationUS } from '../utils/tmdbCodes';
import FooterContainer from './footer';
import TabContainer from './tab';

const MediaContainer = ({ mediaTYPE, content, siteData, brandPictures, langSelected, viewport }) => {

    const { data } = content;

    const findRating = (array) => {
        let result = "";

        if (array.length === 0) {
            result = "-"
        } else {
            result = array.find(arr => arr['iso_3166_1'] === "US");
            if (typeof result === 'undefined') {
                result = "-"
            } else {
                result = result.rating;
            }
        }

        const serieCert = serieCertificationUS.find(sc => sc.certification === result);

        return {
            ratingValue: serieCert.rating,
            url: serieCert.url,
        };
    };

    const findCertification = (array) => {
        let result = "";

        if (array.length === 0) {
            result = "-"
        } else {
            result = array.find(arr => arr['iso_3166_1'] === "US");
            if (typeof result === 'undefined') {
                result = "-"
            } else if (result['release_dates'].length === 0) {
                result = "-"
            } else {
                result = result['release_dates'][0].certification;
            }
        }

        const movieCert = movieCertificationUS.find(mc => mc.certification === result);

        return {
            certificationValue: movieCert.rating,
            url: movieCert.url,
        }
    };

    const dataUsed = {
        id: data.id,
        genres: data.genres,
        createdBy: data?.created_by,
        episodeRunTime: data?.episode_run_time,
        episodeFirstAirDate: data?.first_air_date.substr(0, 4),
        episodeLastAirDate: data?.last_air_date.substr(0, 4),
        episodeList: data?.episodeList,
        name: data?.name,
        numberEpisodes: data?.number_of_episodes,
        numberSeasons: data?.number_of_seasons,
        overview: data.overview,
        seasons: data?.seasons,
        credits: data.credits,
        videos: data.videos,
        contentRatings: data?.content_ratings && findRating(data?.content_ratings.results),
        releaseDates: data?.release_dates && findCertification(data?.release_dates.results),
        title: data?.title,
    }

    //SERIES
    /*  
        id,
        genres,
        created_by,
        episode_run_time,
        first_air_date,
        last_air_date,
        name,
        number_of_episodes,
        number_of_seasons,
        overview,
        seasons,
        credits: {cast : []},
        videos,
        content_ratings
    */

    //MOVIES
    /*
        id,
        genres,
        title,
        credits: {
            cast : [],
            crew : [
                {
                    name,
                    job: "Director"
                }
            ],
        },
        release_dates : { results : [ { iso_3166_1 : "US"}]}
    */

    return (
        <Media>
            <Media.Multimedia>
                {/* <Media.Image src={`${URL_TMDB_PICTURE}${backdrop_path}`} /> */}
                <Media.Image src={`${URL_PICTURE}` + brandPictures[`${dataUsed.id}`]['backdrop']} viewport={viewport} />
                <Media.Background />
            </Media.Multimedia>

            <Media.Section>
                <Media.Information>
                    <Media.Logo src={`${URL_PICTURE}` + brandPictures[`${dataUsed.id}`]['logo']} />
                    <Media.TagGroup>
                        <Media.TagRow>
                            <Media.Tag><Media.ImageTag src={dataUsed.contentRatings.url} alt={dataUsed.contentRatings.ratingValue} /></Media.Tag>
                            <Media.Tag>{dataUsed.episodeFirstAirDate}</Media.Tag> <Media.Tag>-</Media.Tag> <Media.Tag>{dataUsed.episodeLastAirDate}</Media.Tag>
                            <Media.Tag> • {dataUsed.numberSeasons} temporadas</Media.Tag>
                        </Media.TagRow>
                        {
                            dataUsed.genres.map((gen, index, array) => {
                                return <Media.TagGenres key={gen.id}>{(langSelected === 'es-MX' ? genresES[gen.id].name : gen.name)}{array.length - 1 === index ? '' : ', '}</Media.TagGenres>
                            })
                        }
                    </Media.TagGroup>

                    <Media.ButtonGroup>
                        {/* <Media.SignUpButton to="/signup">OBTENER DISNEY+</Media.SignUpButton> */}
                        <Media.PlayButton><SVGplay />VER AHORA</Media.PlayButton>

                        <Media.TrailerButton>TRAILER</Media.TrailerButton>

                        <Media.ButtonSubGroup>
                            <Media.AddListButton>+</Media.AddListButton>
                            <Media.GroupWatchButton><SVGgroupWatch /></Media.GroupWatchButton>
                        </Media.ButtonSubGroup>
                    </Media.ButtonGroup>

                    <Media.Overview>{dataUsed.overview}</Media.Overview>
                </Media.Information>

                <Media.TabGroup>
                    <TabContainer dataUsed={dataUsed} langSelected={langSelected} />
                </Media.TabGroup>
            </Media.Section>

            <FooterContainer siteData={siteData} />
        </Media>
    )
}

export default MediaContainer;
