import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ButtonLoginV1, ButtonSignUpV1, Header } from '../components';
import { Search } from '../pages';
import HeaderContainer from '../containers/header';
import { useScroll } from '../hooks/useScroll';
import { siteContent } from '../utils/siteContent';

const SearchRouter = () => {

    const langSelected = useSelector(state => state.lang.language);
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];
    const brandContent = useSelector(state => state.brand.brandList);
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

            <Switch>
                <Route path="/search">
                    <Search
                        langSelected={langSelected}
                        siteData={siteData}
                        brandContent={brandContent}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default SearchRouter
