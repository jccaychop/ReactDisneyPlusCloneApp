import React from 'react';
import { Hero } from '../components';

const HeroContainer = ({ siteData }) => {

    const { hero: { img_mobile, img_web, title, combo, button, text, link, cost } } = siteData;

    return (
        <Hero>
            <Hero.Advertising>
                <Hero.Title>{title}</Hero.Title>
                <Hero.Combo src={combo['src']} />
                <Hero.Button to="/signup">{button}</Hero.Button>
                <Hero.Text>{text}</Hero.Text>
                <Hero.Link to="/signup">{link}</Hero.Link>
                <Hero.Cost>{cost}</Hero.Cost>
            </Hero.Advertising>

            <Hero.Background imgMobile={img_mobile} imgWeb={img_web} />
        </Hero>
    )
}

export default HeroContainer;
