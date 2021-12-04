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

    #warning {
        font-size: 12px;
        text-align: center;
        color: var(--red-1);
        font-weight: bold;
        padding: 15px 0;
        letter-spacing: 1.2px;
    }

    #generator {
        background-color: red;
        padding: 0 1px;
        cursor: pointer;
        transition: all 400ms ease;

        &:hover {
            background-color: var(--red-1);
        }
    }
`;

export const Input = styled.input`
    height: 48px;
    width: 100%;
    padding: 3px 10px;
    margin-top: 24px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: var(--black-3);
    color: var(--gray-3);

    ${({ isCardValid }) => isCardValid && `
        border: 1px solid rgb(99, 220, 159);
    `}
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

    input {
        padding-right: 45px;
    }

    p {
        margin-top: 10px;
    }

    p:nth-of-type(2) {
        color: var(--red-1);
    }
`;

export const Button = styled.button`
    height: 48px;
    width: 100%;
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
    cursor: pointer;

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
    margin: 5px 0 15px 0;
    position: relative;
    display: flex;
    flex-direction: column;

    p {
        margin-bottom: 25px;
        color: var(--red-1);
    }
`;

export const OffersGroup = styled.div`
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
    font-size: 12px;
    line-height: 1.45;
    
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
    bottom: 135px;
    background-image: linear-gradient(rgba(26, 29, 41, 0), rgba(26, 29, 41, 0.9) 100%);

    @media ${device['sm']}{
        background-image: none;
        display: none;
    }
`;

export const AgreementGroup = styled.div`
    position: sticky;
    bottom: 0;
    padding-bottom: 24px;
    overflow: hidden;
    margin: 0 auto -100px;
    background-color: var(--background-2);

    @media ${device['sm']}{
        position: relative;
        margin-bottom: 50px;
    }
`;

export const Shadow = styled.div`
    box-shadow: rgb(249 249 249 / 30%) 0px -0.5px 0px 0px inset;
    height: 1px;
    margin-bottom: 16px;
    width: 100%;
`;

export const Accept = styled.div`

    @media ${device['sm']}{
        padding: 0 65px;
    }
`;

export const SuggestionEmail = styled.div`
    border: none;
    outline: none;
    border-left: 2px solid var(--gray-3);
    padding-left: 10px;
    margin: 25px 0;

    p {
        font-size: 20px;
        color: var(--white);
        word-wrap: break-word;
    }

    p:first-of-type {
        font-size: 15px;
        color: #87898E;
        font-weight: 600;
    }
`;

export const InputGroup = styled.div`
    position: relative;
    margin-top: 15px;
    transition: background 0s ease 0s;

    label {
        text-transform: uppercase;
        padding: 0;
        padding-right: 5px;
        margin: 0;
        font-size: 10px;
    }

    input {
        margin: 0;
        height: 54px;
    }

    #credit-card {
        ${({ ccType }) => (ccType === "") && `
            background-image:   url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/66BB220C88D35460BFC5D42119229DD016E054C70194F40B1E94A20783A20290/scale?"),
                            url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52B9ACD15F9301E61480729B021FE9DABA6373BD5BA5AD77B16D34FCD25F7AA7/scale?"),
                            url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/74D786689372F4055FFF7EA328D7815B466B168A0955050062E565822CAB8416/scale?");
            background-position: right 12px center, right 38px center, right 75px center;
            background-size: 22px 22px, 33px 22px, 33px 22px;
            background-repeat: no-repeat, no-repeat, no-repeat;
        `}

        ${({ ccType }) => (ccType === "Mastercard") && `
            background-image: url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52B9ACD15F9301E61480729B021FE9DABA6373BD5BA5AD77B16D34FCD25F7AA7/scale?");
            background-position: right 12px center;
            background-size: 33px 22px;
            background-repeat: no-repeat;
        `}

        ${({ ccType }) => (ccType === "AmericanExpress") && `
            background-image: url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/66BB220C88D35460BFC5D42119229DD016E054C70194F40B1E94A20783A20290/scale?");
            background-position: right 12px center;
            background-size: 22px 22px;
            background-repeat: no-repeat;
        `}

        ${({ ccType }) => (ccType === "Visa") && `
            background-image: url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/74D786689372F4055FFF7EA328D7815B466B168A0955050062E565822CAB8416/scale?");
            background-position: right 12px center;
            background-size: 33px 22px;
            background-repeat: no-repeat;
        `}
    }

`;

export const InputGroupRow = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    div {
        flex: 1;
    }

    div:nth-of-type(1) {
        padding-right: 5px;
    }

    div:nth-of-type(2) {
        padding-left: 5px;
    }

`;
