import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`
    max-width: 374px;
    margin: 0 auto;
    padding-top: 50px;

    display: flex;
    flex-direction: column;
`;

export const LogoLink = styled(ReactRouterLink)`
    width: 148px;
    max-width: 172px;
    margin: 0 auto;

    @media ${device['sm']}{
        width: 172px;
    }
`;

export const Picture = styled.picture`

`;

export const Logo = styled.img`
    width: 100%;
    height: auto;
`;

export const Title = styled.h3`
    font-family: var(--font-heavy), sans-serif;
    font-size: 24px;
    margin-top: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 3px 10px;
    margin-top: 24px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: var(--black-3);
    color: var(--gray-3);

    ${({ emailExistText }) => !emailExistText && `
        border: 1px solid var(--red-1);
    `}
`;

export const Button = styled.button`
    height: 48px;
    padding: 3px 10px;
    margin-top: 35px;
    border: none;
    outline: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 2px;
    color: var(--white);
    cursor: pointer;
    background-color: var(--blue-3);
    transition: all 0.5s ease;

    &:hover {
        background-color: var(--blue-4);
    }
`;

export const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    font-size: 15px;
    letter-spacing: 1px;
`;

export const Text = styled.p`
    color: var(--gray-2);
    padding: 8px 0;
`;

export const Text2 = styled.p`
    font-size: 12px;
    color: var(--red-1);
    padding: 8px 0;
    line-height: 1.4;
    letter-spacing: 0.3px;
`;

export const Link = styled(ReactRouterLink)`
    padding: 8px 0;
    text-decoration: none;
    color: var(--white);
    transition: all 0.5s ease;

    &:hover {
        color: var(--blue-5);
        text-decoration: underline;
    }
`;

export const PasswordGroup = styled.div`
    width: 100%;
    position: relative;

    i {
        position: absolute;
        top: 40px;
        right: 15px;
        opacity: 0.8;
        transition: opacity 450ms ease;

        &:hover{
            cursor: pointer;
            opacity: 1;
        }
    }
`;
