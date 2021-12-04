import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Login } from '../components';
import { firebaseCheckEmailExists } from '../firebase/authFirebase';

const LoginP = ({ siteData, formValues, handleInputChange, isError, setIsError, setEmailExist, emailExistText, setEmailExistText }) => {

    const { login: { step_1: { title, form, group, email_error, email_not_exist } } } = siteData;

    const history = useHistory();

    const validationEmail = async () => {

        if (formValues.email.trim() === "") {
            setIsError(true);
            setEmailExist(true);
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formValues.email)) {
            setIsError(true);
            setEmailExist(true);
        } else {
            // verificar si existe el email
            const exists = await firebaseCheckEmailExists(formValues.email);

            // si no tiene metodo de inicio de sesion, el array es vacio
            // por tanto, el email no esta registrado
            if (!exists) {
                setIsError(false);
                setEmailExist(false);
                setEmailExistText(false);
                // history.push("/signup");
            } else {
                setIsError(false);
                setEmailExist(true);
                setEmailExistText(true);
                history.push("/login/password");
            }
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setIsError(false);
        setEmailExist(true);
        setEmailExistText(true);
    }, [formValues]);

    return (
        <>
            <Login.Title>{title}</Login.Title>

            <Login.Input
                type="email"
                placeholder={form.placeholder}
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                emailExistText={emailExistText}
            />

            {isError && (<Login.Text2>{email_error}</Login.Text2>)}
            {!emailExistText && (<Login.Text2>{email_not_exist.error}</Login.Text2>)}

            <Login.Button type="button" onClick={validationEmail}>{form.button}</Login.Button>

            <Login.Group>
                <Login.Text>{group.text}</Login.Text>
                <Login.Link to="/signup">{group.link}</Login.Link>
            </Login.Group>
        </>
    )
}

export default LoginP;
