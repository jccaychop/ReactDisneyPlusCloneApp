import React from 'react';
import { Login } from '../components';
import { utilityURL } from '../utils/siteImagesURL';

const LoginContainer = ({ siteData }) => {

    const { login: { title, form, group } } = siteData;

    return (
        <Login>
            <Login.LogoLink to="/">
                <Login.Picture>
                    <Login.Logo src={utilityURL[0]['src']} alt={utilityURL[0]['alt']} />
                </Login.Picture>
            </Login.LogoLink>
            <Login.Title>{title}</Login.Title>

            <Login.Form>
                <Login.Input type="email" placeholder={form.placeholder} />
                <Login.Button type="button">{form.button}</Login.Button>
            </Login.Form>

            <Login.Group>
                <Login.Text>{group.text}</Login.Text>
                <Login.Link to="/signup">{group.link}</Login.Link>
            </Login.Group>
        </Login>
    )
}

export default LoginContainer;
