import React from 'react';
import { AgreementES, Signup } from '../components';

const Subscriber = ({ siteData }) => {

    const { signup: { step_2: { step_label, title, subscription } } } = siteData;

    return (
        <Signup.Form>
            <Signup.Step>{step_label}</Signup.Step>

            <Signup.Title>{title}</Signup.Title>

            <Signup.Agreement>
                <AgreementES />
            </Signup.Agreement>
            <Signup.Background />
        </Signup.Form>
    )
}

export default Subscriber;
