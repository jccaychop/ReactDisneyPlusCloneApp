import styled from "styled-components/macro";
import { device } from "../../../utils/breakpoints";

const imageUrl = "https://prod-static.disney-plus.net/assets/product/disneyplus/images/404.06a47039848e01563a88857231aba51b.jpg";

export const Container = styled.div`
    position: relative;
    background: url(${imageUrl}) 50% no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;

export const Background = styled.div`
    height: 100%;
    background: rgba(0,0,0,0.5);
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 640px;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-family: var(--font-heavy);
    color: var(--white);
    text-align: center;

    @media ${device['sm']}{
        font-size: 44px;
    }
`;

export const Text = styled.p`
    font-size: 15px;
    color: var(--white);
    text-align: center;
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    height: 48px;
    max-width: 190px;
    margin: 0 auto;
    padding: 0 24px;
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
