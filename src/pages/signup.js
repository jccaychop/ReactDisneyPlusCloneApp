import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Signup, SVGcheckbox } from '../components';
import { firebaseCheckEmailExists } from '../firebase/authFirebase';
import { EmailExist } from './../actions/authorization';

const SignUp = ({ siteData, formValues, handleInputChange, color, changeColor, nextStep, step, setStep }) => {

    const { signup: { step_1: { step_label, title, form, offers, email_error, privacy_1, privacy_2 } } } = siteData;

    const [isError, setIsError] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const validationEmail = async () => {

        if (formValues.email.trim() === "") {
            setIsError(true);
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formValues.email)) {
            setIsError(true);
        } else {
            // verificar si existe el email
            const exists = await firebaseCheckEmailExists(formValues.email);

            // si no tiene metodo de inicio de sesion, el array es vacio
            if (!exists) {
                setIsError(false);
                nextStep();
                history.push("/signup/susbscriber-agreement-review");
            } else {
                setIsError(false);
                dispatch(EmailExist(formValues.email));
                history.push("/login/password");
            }
        }
    };

    useEffect(() => {
        setStep(1);
    }, [step]);

    useEffect(() => {
        setIsError(false);
    }, [formValues]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
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
        </>
    )
}

export default SignUp;
