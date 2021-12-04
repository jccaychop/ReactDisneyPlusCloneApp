import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Signup } from '../components';

const Password = ({ siteData, formValues, handleInputChange, nextStep, step, setStep }) => {

    const { signup: { step_3: { step_label, title, form, password_error } } } = siteData;
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [isError, setIsError] = useState(false);

    const validationPassword = () => {
        if (formValues.password.trim() === "") {
            setIsError(true);
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%=*?&])[A-Za-z\d@$!%=*?&]{8,}$/.test(formValues.password)) {
            // Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial:
            setIsError(true);
        } else {
            setIsError(false);
            nextStep();
            history.push("/signup/billing");
        }
    };

    useEffect(() => {
        setStep(3);
    }, [step]);

    useEffect(() => {
        setIsError(false);
    }, [formValues]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (formValues.email.trim() === "" && formValues.agreement === false) {
        return <Redirect to="/signup" />
    }

    return (
        <>
            <Signup.Step>{step_label}</Signup.Step>

            <Signup.Title>{title}</Signup.Title>

            <Signup.PasswordGroup>
                <Signup.Input
                    type={!show ? 'password' : 'text'}
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    placeholder={form.placeholder}
                />
                <i className={!show ? 'fas fa-eye-slash' : 'fas fa-eye'} onClick={() => { setShow(c => !c) }}></i>

                <Signup.Text>{form.suggestion_password}</Signup.Text>

                {isError && (<Signup.Text>{password_error}</Signup.Text>)}
            </Signup.PasswordGroup>

            <Signup.SuggestionEmail>
                <Signup.Text>{form.suggestion_email}</Signup.Text>
                <Signup.Text>{formValues.email}</Signup.Text>
            </Signup.SuggestionEmail>

            <Signup.Button type="button" onClick={validationPassword}>{form.button}</Signup.Button>
        </>
    )
}

export default Password
