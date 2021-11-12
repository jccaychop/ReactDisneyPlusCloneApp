import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';

export const ButtonBase = styled(ReactRouterLink)`
    text-transform: uppercase;
    color: var(--white);
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    text-decoration: none;
    font-size: 15px;
    line-height: 0px;
    min-height: 39px;
    transition: all 0.5s ease;
    letter-spacing: 1.1px;
    min-width: 158px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-align: center;
    cursor: pointer;
`;

export const LoginV1 = styled(ButtonBase)`
    background-color: var(--black-2);
    border: 1px solid var(--white);

    &:hover {
        background-color: var(--white);
        color: var(--black-1);
    }
`;

export const SignUpV1 = styled(ButtonBase)`
    background-color: var(--blue-1);
    margin-right: 20px;

    &:hover { 
        background-color: var(--blue-2);
    }

    @media (max-width: 768px){
        display: none;
    }
`;

export const SignUpV2 = styled(ButtonBase)`
    background-color: var(--blue-1);
    font-weight: bold;

    &:hover { 
        background-color: var(--blue-2);
    }
`;
