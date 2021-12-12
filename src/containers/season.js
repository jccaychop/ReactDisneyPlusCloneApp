import React from 'react';
import { Season } from '../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../global/myCarousel.css';
import 'animate.css';
import truncatise from 'truncatise';
import { URL_TMDB_PICTURE } from '../environments/environments';
import { utilityURL } from '../utils/siteImagesURL';

const SeasonContainer = ({ episodes, langSelected }) => {



    const responsive = {
        desktop_1: {
            breakpoint: {
                max: 9000,
                min: 1440
            },
            items: 5,
            slidesToSlide: 5,
            partialVisibilityGutter: 40
        },
        desktop_2: {
            breakpoint: {
                max: 1439,
                min: 1025
            },
            items: 4,
            slidesToSlide: 4,
            partialVisibilityGutter: 40
        },
        desktop_3: {
            breakpoint: {
                max: 1024,
                min: 768
            },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: {
                max: 767,
                min: 576
            },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 40
        },
        mobile_1: {
            breakpoint: {
                max: 575,
                min: 450,
            },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 40
        },
        mobile_2: {
            breakpoint: {
                max: 449,
                min: 0,
            },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 40
        }
    }

    const options = {
        TruncateLength: 200,
        TruncateBy: "characters", // Options are 'words', 'characters' or 'paragraphs'
        Strict: false,
        StripHTML: true,
        Suffix: ' ...'
    };

    return (
        <Season>
            <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlaySpeed={3000}
                containerClass="season-carousel"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                swipeable
            >
                {
                    episodes.map(item => {
                        let source = "";
                        if (item['still_path'] === "" || item['still_path'] === null) {
                            source = langSelected === 'es-MX' ? utilityURL[12].src : utilityURL[13].src;
                        } else {
                            source = `${URL_TMDB_PICTURE}${item['still_path']}`;
                        }

                        return (
                            <Season.Item key={item.id}>
                                <Season.Poster>
                                    <Season.Image
                                        className="animate__animated animate__fadeIn"
                                        src={source}
                                        onError={
                                            (e) => {
                                                e.target.onerror = null;
                                                e.target.src = langSelected === 'es-MX' ? utilityURL[12].src : utilityURL[13].src
                                            }
                                        }
                                    />
                                </Season.Poster>
                                <Season.Title>{item.episode_number}. {item.name}</Season.Title>
                                <Season.Text>{truncatise(item.overview, options)}</Season.Text>
                            </Season.Item>
                        )
                    })
                }
            </Carousel>
        </Season>
    )
}

export default SeasonContainer;
