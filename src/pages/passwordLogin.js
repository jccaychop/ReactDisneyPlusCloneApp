import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { Login } from '../components';
import { PassError } from '../actions/authorization';

const PasswordLogin = ({ siteData, formValues, handleInputChange, passLoginError, isValidate, setIsValidate, handleSubmit }) => {

    const { login: { step_2: { title, form, password_error, suggestion_password } } } = siteData;

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsValidate(true);
        dispatch(PassError(false));
    }, [formValues]);


    if (formValues.email.trim() === "") {
        return <Redirect to="/login" />
    }

    return (
        <>
            <Login.Title>{title}</Login.Title>

            <Login.PasswordGroup>
                <Login.Input
                    type={!show ? 'password' : 'text'}
                    placeholder={form.placeholder}
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    emailExistText={isValidate && !passLoginError}
                />
                <i className={!show ? 'fas fa-eye-slash' : 'fas fa-eye'} onClick={() => { setShow(c => !c) }}></i>

                {!isValidate && (<Login.Text2>{suggestion_password}</Login.Text2>)}
                {passLoginError && (<Login.Text2>{password_error}</Login.Text2>)}

                <Login.Text style={{ fontSize: "12px", marginTop: "5px" }}>{form.suggestion_password}</Login.Text>
            </Login.PasswordGroup>

            <Login.Button style={{ marginTop: "20px" }} type="submit" onSubmit={handleSubmit}>{form.button}</Login.Button>
        </>
    )
}

export default PasswordLogin;
