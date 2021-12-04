import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Wrapper } from '../components';
import { siteContent } from '../utils/siteContent';
import FooterContainer from '../containers/footer';
import { LoginP, PasswordLogin } from './../pages';
import { utilityURL } from '../utils/siteImagesURL';
import { useForm } from '../hooks/useForm';
import { firebaseLoginUser } from '../firebase/authFirebase';
import ModalContainer from '../containers/modal';

const LoginRouter = ({ isAuthenticated }) => {

    const langSelected = useSelector(state => state.lang.language);
    const emailRegistered = useSelector(state => state.auth.email);
    const passLoginError = useSelector(state => state.auth.passError);
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];

    const { login: { step_1: { email_not_exist } } } = siteData;

    const dispatch = useDispatch();

    const [isError, setIsError] = useState(false);
    const [isValidate, setIsValidate] = useState(true);
    const [emailExist, setEmailExist] = useState(true);
    const [emailExistText, setEmailExistText] = useState(true);

    const [formValues, handleInputChange] = useForm({
        email: emailRegistered,
        password: "",
    });

    const validationPassword = () => {
        let result = false;
        if (formValues.password.trim() === "") {
            result = false;
            setIsValidate(false);
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%=*?&])[A-Za-z\d@$!%=*?&]{8,}$/.test(formValues.password)) {
            // Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial:
            result = false;
            setIsValidate(false);
        } else {
            result = true;
            setIsValidate(true);
        }
        return result;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = validationPassword();
        result && dispatch(firebaseLoginUser(formValues));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isAuthenticated) {
        return <Redirect to="/home" />
    };

    return (
        <>
            {
                !emailExist && (
                    <ModalContainer
                        title={email_not_exist.title}
                        text={email_not_exist.text}
                        primaryButton={email_not_exist.button.try}
                        secondaryButton={email_not_exist.button.signup}
                        setEmailExist={setEmailExist}
                    />
                )
            }

            <Wrapper>
                <Login>
                    <Login.LogoLink to="/">
                        <Login.Picture>
                            <Login.Logo src={utilityURL[0]['src']} alt={utilityURL[0]['alt']} />
                        </Login.Picture>
                    </Login.LogoLink>

                    <Login.Form onSubmit={handleSubmit}>
                        <Switch>
                            <Route path="/login/password">
                                <PasswordLogin
                                    siteData={siteData}
                                    formValues={formValues}
                                    handleInputChange={handleInputChange}
                                    passLoginError={passLoginError}
                                    isValidate={isValidate}
                                    setIsValidate={setIsValidate}
                                    handleSubmit={handleSubmit}
                                />
                            </Route>

                            <Route path="/login">
                                <LoginP
                                    siteData={siteData}
                                    formValues={formValues}
                                    handleInputChange={handleInputChange}
                                    isError={isError}
                                    setIsError={setIsError}
                                    setEmailExist={setEmailExist}
                                    emailExistText={emailExistText}
                                    setEmailExistText={setEmailExistText}
                                />
                            </Route>
                        </Switch>
                    </Login.Form>
                </Login>
            </Wrapper>

            <FooterContainer siteData={siteData} />
        </>
    )
}

export default LoginRouter;
