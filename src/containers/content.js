import React, { useEffect, useState } from 'react';
import { Content } from '../components';
import { URL_PICTURE } from '../environments/environments';
import { pictureTotalBrands } from '../utils/brandPictures';
import { mediaListByGenre } from '../utils/mediaListByGenre';
import FooterContainer from './footer';

const ContentContainer = ({ title, url, pictureID, siteData, brandIdGenre, genreNames, mediaList }) => {

    const [value, setValue] = useState(brandIdGenre[0]);
    const [media, setMedia] = useState(null);

    const handleChange = (e) => {
        let valor = e.target.value;
        setValue(+valor);
    }

    useEffect(() => {
        let list = mediaListByGenre(mediaList, value);
        setMedia(list);
        window.scrollTo(0, 0);
    }, [value]);

    return (
        <>
            <Content>
                <Content.Group>
                    <Content.Title>{title}</Content.Title>
                    <Content.Select onChange={handleChange} value={value}>
                        {
                            brandIdGenre.map(element => {
                                return <Content.Option key={element} value={element}>{genreNames[element].name}</Content.Option>
                            })
                        }
                    </Content.Select>
                </Content.Group>

                <Content.Media>
                    {
                        (media !== null)
                        && (
                            media.map(element => {
                                return (
                                    <Content.NavLink key={element.id} to={`${url}/${element.id}`}>
                                        <Content.Image
                                            src={URL_PICTURE + pictureTotalBrands[element.id].lang[pictureID].poster}
                                        />
                                    </Content.NavLink>
                                )
                            })
                        )
                    }
                </Content.Media>

                <FooterContainer siteData={siteData} />
            </Content>

        </>
    )
}

export default ContentContainer;
