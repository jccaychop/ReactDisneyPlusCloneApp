import React from 'react';
import { LoginV1, SignUpV1, SignUpV2 } from './styles/buttons';

export const ButtonLoginV1 = ({ children, ...restProps }) => {
    return (
        <LoginV1 {...restProps}>
            {children}
        </LoginV1>
    )
};

export const ButtonSignUpV1 = ({ children, ...restProps }) => {
    return (
        <SignUpV1 {...restProps}>
            {children}
        </SignUpV1>
    )
};

export const ButtonSignUpV2 = ({ children, ...restProps }) => {
    return (
        <SignUpV2 {...restProps}>
            {children}
        </SignUpV2>
    )
};
