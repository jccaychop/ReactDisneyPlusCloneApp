import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Signup, SVGcheckbox } from '../components';

const SignUp = ({ siteData, formValues, handleInputChange, color, changeColor, nextStep, step, setStep }) => {

    const { signup: { step_1: { step_label, title, form, offers, email_error, privacy_1, privacy_2 } } } = siteData;

    const [isError, setIsError] = useState(false);
    const history = useHistory();

    const validationEmail = () => {
        if (formValues.email.trim() === "") {
            setIsError(true);
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formValues.email)) {
            setIsError(true);
        } else {
            setIsError(false);
            nextStep();
            history.push("/signup/susbscriber-agreement-review");
        }
    };

    useEffect(() => {
        setStep(1);
    }, [step]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Signup.Form>
            <Signup.Step>{step_label}</Signup.Step>

            <Signup.Title>{title}</Signup.Title>

            <Signup.Input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder={form.placeholder}
            />

            <Signup.CheckboxGroup>
                <Signup.Checkbox
                    type="checkbox"
                    name="offers"
                    value={formValues.offers}
                    checked={formValues.offers}
                    readOnly
                />
                {isError && (<Signup.Text>{email_error}</Signup.Text>)}

                <Signup.OffersGroup>
                    <Signup.Span onClick={() => { changeColor() }} chkColor={color ? 'true' : 'false'}><SVGcheckbox /></Signup.Span>
                    <Signup.Label>{offers}</Signup.Label>
                </Signup.OffersGroup>
            </Signup.CheckboxGroup>

            <Signup.Group>
                <Signup.Text>{privacy_1}</Signup.Text>
                <Signup.Text>{privacy_2}</Signup.Text>
                <Signup.Button type="button" onClick={validationEmail}>{form.button}</Signup.Button>
            </Signup.Group>
        </Signup.Form>
    )
}

export default SignUp;
