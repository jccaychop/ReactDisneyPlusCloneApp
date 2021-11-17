import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import { AgreementES, Signup } from '../components';

const Subscriber = ({ siteData, formValues, onClickInputChange, nextStep, step, setStep }) => {

    const { signup: { step_2: { step_label, title, confirmation, form } } } = siteData;

    const history = useHistory();

    const acceptAgreement = (e) => {
        onClickInputChange(e);
        nextStep();
        history.push("/signup/password");
    };

    useEffect(() => {
        setStep(2);
    }, [step]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (formValues.email.trim() === "") {
        return <Redirect to="/signup" />
    }

    return (
        <Signup.Form>
            <Signup.Step>{step_label}</Signup.Step>

            <Signup.Title>{title}</Signup.Title>

            <Signup.Agreement>
                <AgreementES />
            </Signup.Agreement>
            <Signup.Background />

            <Signup.AgreementGroup>
                <Signup.Shadow />
                <Signup.Text style={{ textAlign: "center" }}>{confirmation}</Signup.Text>
                <Signup.Accept>
                    <Signup.Button type="button" name="agreement" onClick={acceptAgreement}>{form.button}</Signup.Button>
                </Signup.Accept>
            </Signup.AgreementGroup>
        </Signup.Form>
    )
}

export default Subscriber;
