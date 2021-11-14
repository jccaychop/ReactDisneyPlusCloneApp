import React, { useEffect } from 'react';
import { Signup, SVGcheckbox } from '../components';

const SignUp = ({ siteData, formValues, handleInputChange, color, changeColor, nextStep, step, setStep }) => {

    const { signup: { step_1: { step_label, title, form, offers, privacy_1, privacy_2 } } } = siteData;

    useEffect(() => {
        setStep(1);
    }, [step]);

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

                <Signup.Span onClick={() => { changeColor() }} chkColor={color ? 'true' : 'false'}><SVGcheckbox /></Signup.Span>
                <Signup.Label>{offers}</Signup.Label>
            </Signup.CheckboxGroup>

            <Signup.Group>
                <Signup.Text>{privacy_1}</Signup.Text>
                <Signup.Text>{privacy_2}</Signup.Text>
                <Signup.Button to="/signup/susbscriber-agreement-review" onClick={nextStep}>{form.button}</Signup.Button>
            </Signup.Group>
        </Signup.Form>
    )
}

export default SignUp;
