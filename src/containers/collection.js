import React from 'react';
import { Collection } from '../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../global/myCarousel.css';
import { URL_PICTURE } from '../environments/environments';

const CollectionContainer = ({ langSelected, collection, dataList, brandPictures }) => {

    const indexLang = langSelected === "es-MX" ? 0 : 1;
    const { category, list } = collection;

    const responsive = {
        desktop_1: {
            breakpoint: {
                max: 6000,
                min: 1025
            },
            items: 5,
            slidesToSlide: 5,
            partialVisibilityGutter: 40
        },
        desktop_2: {
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
                max: 769,
                min: 465
            },
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 465,
                min: 0
            },
            items: 2,
            slidesToSlide: 2,
            partialVisibilityGutter: 40
        }
    }

    return (
        <Collection>
            <Collection.Title>{category[indexLang]}</Collection.Title>
            <Carousel
                additionalTransfrom={0}
                arrows={true}
                autoPlaySpeed={3000}
                containerClass="collection-carousel"
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
                    list.map(item => {
                        const filtered = dataList.filter(sb => sb.id === item);
                        const route = filtered[0]['media_type'] === 'tv' ? 'series' : 'movies';

                        return (
                            <Collection.Item key={item}>
                                <Collection.NavLink to={`/${route}/${item}`}>
                                    {
                                        <Collection.Poster src={`${URL_PICTURE}` + brandPictures[`${item}`].lang[indexLang]['poster']} loading="lazy" />
                                    }
                                </Collection.NavLink>
                            </Collection.Item>
                        )
                    })
                }
            </Carousel>
        </Collection>
    )
}

export default CollectionContainer;
