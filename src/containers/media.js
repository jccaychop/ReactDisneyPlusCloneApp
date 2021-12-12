import React from 'react';
import { Media, SVGgroupWatch, SVGplay } from '../components';
import { URL_PICTURE } from '../environments/environments';
import { genresES, serieCertificationUS, movieCertificationUS, closeCaption } from '../utils/tmdbCodes';
import FooterContainer from './footer';
import TabContainer from './tab';
import truncatise from 'truncatise';

const MediaContainer = ({ mediaTYPE, content, siteData, brandPictures, langSelected, viewport }) => {

    const indexLang = langSelected === "es-MX" ? 0 : 1;
    const { media: { button, tags } } = siteData;
    const { data } = content;

    const options = {
        TruncateLength: 40,
        TruncateBy: "words", // Options are 'words', 'characters' or 'paragraphs'
        Strict: false,
        StripHTML: true,
        Suffix: ' ...'
    };

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

    const runTimeCalculation = (value) => {
        let hour;
        let minute;
        if (value < 60) {
            hour = 0;
            minute = value;
            return `${minute} min`
        } else {
            hour = Math.floor(value / 60);
            minute = value % 60;
            return `${hour}h ${minute} min`
        }
    }

    const dataUsed = {
        id: data.id,
        genres: data.genres,
        createdBy: data?.created_by,
        episodeRunTime: data?.episode_run_time,
        episodeFirstAirDate: data?.first_air_date && data?.first_air_date.substr(0, 4),
        episodeLastAirDate: data?.last_air_date && data?.last_air_date.substr(0, 4),
        episodeList: data?.episodeList,
        name: data?.name,
        numberEpisodes: data?.number_of_episodes,
        numberSeasons: data?.number_of_seasons,
        overview: data.overview,
        seasons: data?.seasons,
        credits: data.credits,
        videos: data.videos,
        contentRatings: data?.content_ratings && findRating(data?.content_ratings?.results),
        releaseDates: data?.release_dates && findCertification(data?.release_dates?.results),
        releaseDate: data?.release_date && data?.release_date.substr(0, 4),
        title: data?.title,
        runTime: data?.runtime && runTimeCalculation(data?.runtime),
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
                <Media.Background />    {/* radial-gradient */}
            </Media.Multimedia>

            <Media.Section>
                <Media.Information>
                    <Media.Logo src={`${URL_PICTURE}` + brandPictures[`${dataUsed.id}`].lang[indexLang]['logo']} />
                    <Media.TagGroup>
                        {
                            (mediaTYPE === "series")
                                ? (
                                    <Media.TagRow>
                                        <Media.Tag><Media.ImageTag src={dataUsed.contentRatings.url} alt={dataUsed.contentRatings.ratingValue} /></Media.Tag>
                                        {
                                            (dataUsed?.numberSeasons === 1)
                                                ? (<Media.Tag>{dataUsed?.episodeFirstAirDate}</Media.Tag>)
                                                : (
                                                    <>
                                                        <Media.Tag>{dataUsed?.episodeFirstAirDate}</Media.Tag> <Media.Tag>-</Media.Tag> <Media.Tag>{dataUsed?.episodeLastAirDate}</Media.Tag>
                                                    </>
                                                )
                                        }
                                        <Media.Tag> • {dataUsed?.numberSeasons} {tags.season}</Media.Tag>
                                    </Media.TagRow>
                                )
                                : (
                                    <Media.TagRow>
                                        <Media.Tag><Media.ImageTag src={dataUsed.releaseDates.url} alt={dataUsed.releaseDates.ratingValue} /></Media.Tag>
                                        <Media.Tag><Media.ImageTag src={closeCaption.url} alt={closeCaption.name} /></Media.Tag>
                                        <Media.Tag>{dataUsed.releaseDate}</Media.Tag>
                                        <Media.Tag>•</Media.Tag>
                                        <Media.Tag>{dataUsed.runTime}</Media.Tag>
                                    </Media.TagRow>
                                )
                        }
                        {
                            dataUsed.genres.map((gen, index, array) => {
                                return <Media.TagGenres key={gen.id}>{(langSelected === 'es-MX' ? genresES[gen.id].name : gen.name)}{array.length - 1 === index ? '' : ', '}</Media.TagGenres>
                            })
                        }
                    </Media.TagGroup>

                    <Media.ButtonGroup>
                        {/* <Media.SignUpButton to="/signup">OBTENER DISNEY+</Media.SignUpButton> */}
                        <Media.PlayButton><SVGplay />{button.play}</Media.PlayButton>

                        <Media.TrailerButton>{button.trailer}</Media.TrailerButton>

                        <Media.ButtonSubGroup>
                            <Media.AddListButton>+</Media.AddListButton>
                            <Media.GroupWatchButton><SVGgroupWatch /></Media.GroupWatchButton>
                        </Media.ButtonSubGroup>
                    </Media.ButtonGroup>

                    <Media.Overview>{truncatise(dataUsed.overview, options)}</Media.Overview>
                </Media.Information>

                <Media.TabGroup>
                    <TabContainer dataUsed={dataUsed} mediaTYPE={mediaTYPE} langSelected={langSelected} siteData={siteData} />
                </Media.TabGroup>
            </Media.Section>

            <FooterContainer siteData={siteData} />
        </Media>
    )
}

export default MediaContainer;
