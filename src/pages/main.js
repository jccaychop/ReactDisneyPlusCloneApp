import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroContainer from './../containers/hero';
import HeroContainerEN from './../containers/heroEN';
import SectionContainer from './../containers/section';
import FeaturesContainer from './../containers/features';
import ProductionsContainer from './../containers/productions';
import PromotionContainer from './../containers/promotion';
import FooterContainer from './../containers/footer';
import GadgetContainer from './../containers/gadget';
import HeaderContainer from './../containers/header';
import { siteContent } from './../utils/siteContent';
import { ButtonLoginV1, ButtonSignUpV1, Features, Header, Hero, Productions, Section } from '../components';
import { changeLanguageAction, finishLanguageLoading, startLanguageLoading } from '../actions/language';
import { useScroll } from '../hooks/useScroll';

const Main = () => {

    const langSelected = useSelector(state => state.lang.language);

    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];
    const { buttons, features, productions: { originals, entertainment } } = siteData;

    const dispatch = useDispatch();
    const [language, setLanguage] = useState(useSelector(state => state.lang.language));

    const [viewport] = useScroll();

    const handleChange = (e) => {
        if (e.target.type === "select-one") {
            dispatch(startLanguageLoading());
            let selected = e.target.options[e.target.selectedIndex].value;
            setLanguage(selected);
        }
    };

    useEffect(() => {
        dispatch(changeLanguageAction(language));
        dispatch(finishLanguageLoading());
        window.scrollTo(0, 0);
    }, [language, dispatch]);

    return (
        <>
            <HeaderContainer viewport={viewport}>
                <Header.Group>
                    {
                        (viewport.y < -600) && <ButtonSignUpV1 to={"/signup"} viewport={viewport} className="animate__animated animate__fadeIn">{buttons['signup']}</ButtonSignUpV1>
                    }
                    <ButtonLoginV1 to={"/login"}>{buttons['login']}</ButtonLoginV1>
                </Header.Group>
            </HeaderContainer>
            {
                langSelected === 'es-MX'
                    ? <HeroContainer siteData={siteData} />
                    : <HeroContainerEN siteData={siteData} />
            }

            <SectionContainer>
                <Section.Group>
                    <FeaturesContainer src={features[0]['img']['src']}>
                        <Features.Description>
                            <Features.Title>{features[0]['title']}</Features.Title>
                            <Features.Text>{features[0]['text']}</Features.Text>
                        </Features.Description>
                    </FeaturesContainer>
                </Section.Group>

                <Section.Group>
                    <ProductionsContainer>
                        <Productions.Title>{originals['title']}</Productions.Title>
                        <Productions.Text>{originals['text']}</Productions.Text>
                        <Productions.Images>
                            {
                                originals['images'].map((img, i) => <Productions.Item key={i} src={img['src']} alt={img['title']} />)
                            }
                        </Productions.Images>
                    </ProductionsContainer>
                </Section.Group>

                <Section.Group>
                    <PromotionContainer siteData={siteData} />
                </Section.Group>

                <Section.Group>
                    <ProductionsContainer>
                        <Productions.Title>{entertainment['title']}</Productions.Title>
                        <Productions.Text>{entertainment['text']}</Productions.Text>
                        <Productions.Images>
                            {
                                entertainment['images'].map((img, i) => <Productions.Item key={i} src={img['src']} alt={img['title']} />)
                            }
                        </Productions.Images>
                    </ProductionsContainer>
                </Section.Group>

                {
                    langSelected === 'es-MX' &&
                    <Section.Group>
                        <FeaturesContainer src={features[1]['img']['src']}>
                            <Features.Description>
                                <Features.Text>{features[1]['text']}</Features.Text>
                                <Hero.Button to="/signup" subsbutton={'true'}>{features[1]['button']}</Hero.Button>
                            </Features.Description>
                        </FeaturesContainer>
                    </Section.Group>
                }

                <Section.Group>
                    <GadgetContainer siteData={siteData} />
                </Section.Group>

            </SectionContainer>

            <FooterContainer siteData={siteData} language={language} handleChange={handleChange} />

        </>
    )
}

export default Main;
