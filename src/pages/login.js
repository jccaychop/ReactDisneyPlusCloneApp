import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from '../components';
import FooterContainer from '../containers/footer';
import LoginContainer from './../containers/login';
import { siteContent } from '../utils/siteContent';

const Login = () => {

    const langSelected = useSelector(state => state.lang.language);
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Wrapper>
                <LoginContainer siteData={siteData} />
            </Wrapper>

            <FooterContainer siteData={siteData} />
        </>
    )
}

export default Login;
