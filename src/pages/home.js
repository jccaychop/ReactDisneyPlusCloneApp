import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ButtonLoginV1, ButtonSignUpV1, Header } from '../components';
import HeaderContainer from '../containers/header';
import { useScroll } from '../hooks/useScroll';
import { siteContent } from './../utils/siteContent';

const Home = () => {

    const langSelected = useSelector(state => state.lang.language);

    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];
    const { buttons } = siteData;

    const [viewport] = useScroll();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeaderContainer viewportbrand={viewport}>
                <Header.Group>
                    {
                        (viewport.y < -50) && <ButtonSignUpV1 to={"/signup"} viewportbrand={viewport} className="animate__animated animate__fadeIn">{buttons['signup']}</ButtonSignUpV1>
                    }
                    <ButtonLoginV1 to={"/login"}>{buttons['login']}</ButtonLoginV1>
                </Header.Group>
            </HeaderContainer>
            HOME PAGE
        </>
    )
}

export default Home;
