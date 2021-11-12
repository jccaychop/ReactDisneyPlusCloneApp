import React from 'react';
import { Promotion } from '../components';

const PromotionContainer = ({ siteData }) => {

    const { promotion: { img, title, text, logo } } = siteData;

    return (
        <Promotion>
            <Promotion.ContentOne mobileview>
                <Promotion.Title>{title}</Promotion.Title>
                <Promotion.Text>{text}</Promotion.Text>
            </Promotion.ContentOne>

            <Promotion.ContentTwo>
                <Promotion.LeftSide desktopview>
                    <Promotion.Image src={img['src']} alt={img['alt']} />

                    <Promotion.Description desktopview>
                        <Promotion.Film>
                            <Promotion.MovieLogo src={logo['src']} alt={logo['alt']} />
                            <Promotion.Download><img src="/img/download_arrow.png" alt="download arrow" /></Promotion.Download>
                        </Promotion.Film>
                    </Promotion.Description>
                </Promotion.LeftSide>

                <Promotion.RightSide>
                    <Promotion.Title desktopview>{title}</Promotion.Title>
                    <Promotion.Text desktopview>{text}</Promotion.Text>

                    <Promotion.Description mobileview>
                        <Promotion.Film>
                            <Promotion.MovieLogo src={logo['src']} alt={logo['alt']} />
                            <Promotion.Download><img src="/img/download_arrow.png" alt="download arrow" /></Promotion.Download>
                        </Promotion.Film>
                    </Promotion.Description>
                </Promotion.RightSide>
            </Promotion.ContentTwo>
        </Promotion>
    )
}

export default PromotionContainer;
