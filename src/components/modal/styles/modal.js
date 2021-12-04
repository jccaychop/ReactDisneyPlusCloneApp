import styled from 'styled-components/macro';
import { createGlobalStyle } from "styled-components";

export const GlobalModal = createGlobalStyle`
    body {
        overflow-y: hidden;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(46, 51, 71, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Group = styled.div`
    max-width: 560px;
    border-radius: 5px;
    background: rgb(26, 29, 41);
    padding: 28px;
    margin: auto 20px;
`;

export const Title = styled.h3`
    font-size: 20px;
    color: var(--white);
    padding-bottom: 15px;
`;

export const Text = styled.p`
    font-size: 15px;
    color: var(--gray-2);
    line-height: 1.5;
`;

export const ButtonGroup = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;

    @media (min-width: 480px){
        flex-direction: row-reverse;
    }
`;

export const PrimaryButton = styled.button`
    height: 40px;
    padding: 0 10px;
    font-size: 15px;
    text-align: center;
    color: var(--white);
    font-weight: bold;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    background: rgb(0, 114, 210);
    border: none;
    border-radius: 5px;
    outline: none;
    transition: background 0.5s ease;
    cursor: pointer;

    &:hover {
        background: var(--blue-4);
    }
`;

export const SecondaryButton = styled.button`
    height: 40px;
    padding: 8px 10px;
    font-size: 15px;
    color: var(--white);
    font-weight: bold;
    letter-spacing: 1.2px;
    line-height: 0;
    text-transform: uppercase;
    background: transparent;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        background: var(--white);
        color: var(--black-1);
    }

    @media (min-width: 480px){
        margin-right: 15px;
    }
`;
