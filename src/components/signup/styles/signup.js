import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`
    max-width: 374px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;

    ${({ step }) => (step === 2) && `
        max-width: 506px;
    `}
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

export const Step = styled.p`
    font-size: 10px;
    letter-spacing: 1.25px;
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const Title = styled.h3`
    font-family: var(--font-heavy), sans-serif;
    font-size: 24px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    height: 48px;
    padding: 3px 10px;
    margin-top: 24px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: var(--black-3);
    color: var(--gray-3);
`;

export const Button = styled(ReactRouterLink)`
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    text-decoration: none;
    margin-top: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 2px;
    color: var(--white);
    background-color: var(--blue-3);
    transition: all 0.5s ease;

    &:hover {
        background-color: var(--blue-4);
    }
`;

export const Group = styled.div`
    border: none;
    outline: none;
    background-color: var(--black-3);
    border-radius: 10px;
    padding: 10px;
`;

export const Text = styled.p`
    font-size: 12px;
    line-height: 1.5;
    color: var(--gray-2);
`;

export const CheckboxGroup = styled.div`
    margin: 25px auto;
    position: relative;
    display: flex;
`;

export const Span = styled.span`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(109, 117, 130);
    border-radius: 3px;

    svg {
        fill: transparent;
    }

    ${({ chkColor }) => (chkColor === "true") && `
        background-color: rgb(0, 114, 210);
        border: 2px solid rgb(0, 114, 210);

        svg {
            fill: white;
        }
    `}
`;

export const Checkbox = styled.input`
    position: absolute;
    top: 10px;
    left: 40px;
    opacity: 0;
`;

export const Label = styled.label`
    position: relative;
    font-size: 12px;
    line-height: 1.5;
    color: var(--gray-2);
    padding-left: 15px;
`;

export const Agreement = styled.div`

    margin-top: 20px;
    
    div {
        width: 100%;
        max-width: 100%;
        word-wrap: break-word;
    }

    @media ${device['sm']}{
        div {
            max-height: 260px;
            width: 506px;
            overflow-y: scroll;
            border: 1px solid rgb(49, 52, 62);
            border-radius: 4px;
            padding: 20px;
        }
    }
`;

export const Background = styled.div`
    width: 100%;
    height: 56px;
    position: sticky;
    bottom: 140px;
    background-image: linear-gradient(rgba(26, 29, 41, 0), rgba(26, 29, 41, 0.9) 100%);

    @media ${device['sm']}{
        background-image: none;
        display: none;
    }
`;
