import React from 'react';
import { HeroEN, Logo } from '../components';
import { utilityURL } from '../utils/siteImagesURL';

const HeroContainerEN = ({ siteData }) => {

    const { buttons: { signup, signup2 }, hero: { img_mobile, img_web, title, text, cost, period, cost2, period2 } } = siteData;

    return (
        <HeroEN>
            <HeroEN.Advertising>
                <HeroEN.Picture>
                    <Logo isHero src={utilityURL[0]['src']} alt={utilityURL[0]['alt']} />
                </HeroEN.Picture>
                <HeroEN.Title>{title}</HeroEN.Title>

                <HeroEN.Group>
                    <HeroEN.SubGroup withLine>
                        <HeroEN.Cost>{cost}<span>{period}</span></HeroEN.Cost>
                        <HeroEN.Button to="/signup">{signup}</HeroEN.Button>
                    </HeroEN.SubGroup>

                    <HeroEN.SubGroup>
                        <HeroEN.Cost>{cost2}<span>{period2}</span></HeroEN.Cost>
                        <HeroEN.Button to="/signup">{signup2}</HeroEN.Button>
                    </HeroEN.SubGroup>
                </HeroEN.Group>

                <HeroEN.Text>{text}</HeroEN.Text>
            </HeroEN.Advertising>

            <HeroEN.Background imgMobile={img_mobile} imgWeb={img_web} />
        </HeroEN>
    )
}

export default HeroContainerEN;
