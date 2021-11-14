import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Signup, Wrapper } from '../components';
import { siteContent } from '../utils/siteContent';
import FooterContainer from '../containers/footer';
import { Subscriber, SignUp } from '../pages';
import { useForm } from '../hooks/useForm';
import { utilityURL } from '../utils/siteImagesURL';


const SignupRouter = () => {

    const langSelected = useSelector(state => state.lang.language);
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];

    const [color, setColor] = useState(false);
    const [step, setStep] = useState(1);

    const [formValues, handleInputChange, onClickInputChange] = useForm({
        email: "",
        offers: false,
    });

    const changeColor = () => {
        setColor(!color);
        onClickInputChange(!color);
    };

    const nextStep = () => {
        setStep(c => c + 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Wrapper>
                <Signup step={step}>
                    <Signup.LogoLink to="/">
                        <Signup.Picture>
                            <Signup.Logo src={utilityURL[0]['src']} alt={utilityURL[0]['alt']} />
                        </Signup.Picture>
                    </Signup.LogoLink>

                    <Switch>
                        <Route path="/signup/susbscriber-agreement-review">
                            <Subscriber siteData={siteData} />
                        </Route>
                        <Route exact path="/signup/">
                            <SignUp siteData={siteData} formValues={formValues} handleInputChange={handleInputChange} color={color} changeColor={changeColor} nextStep={nextStep} step={step} setStep={setStep} />
                        </Route>
                    </Switch>
                </Signup>

            </Wrapper>

            <FooterContainer siteData={siteData} />
        </>
    )
}

export default SignupRouter;
