import React from 'react';
import { Season } from '../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../global/myCarousel.css';
import 'animate.css';
import { URL_TMDB_PICTURE } from '../environments/environments';

const SeasonContainer = ({ episodes }) => {

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
                        return (
                            <Season.Item key={item.id}>
                                <Season.Poster>
                                    <Season.Image src={`${URL_TMDB_PICTURE}${item['still_path']}`} className="animate__animated animate__fadeIn"/>
                                </Season.Poster>
                                <Season.Title>{item.episode_number}. {item.name}</Season.Title>
                                <Season.Text>{item.overview}</Season.Text>
                            </Season.Item>
                        )
                    })
                }
            </Carousel>
        </Season>
    )
}

export default SeasonContainer;
