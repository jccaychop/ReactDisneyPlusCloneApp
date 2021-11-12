import styled from "styled-components/macro";
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`
    width: 100%;
    height: 0;

    video {
        left: 0px;
        opacity: 1;
        position: fixed;
        right: 0px;
        top: 0px;
        transition: opacity 200ms ease 0s;
        width: 100%;
        z-index: -3;

        -webkit-mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

        ${({ viewport }) => (viewport?.y < -10 && viewport?.y > -400) && `
            opacity: 0.5;
        `}

        ${({ viewport }) => (viewport?.y < -401) && `
            opacity: 0.2;
        `}
    }
`;

export const Multimedia = styled.div`
    left: 0px;
    opacity: 1;
    position: fixed;
    right: 0px;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    z-index: -1;

    display: none;

    ${({ background }) => background && `
        display: block;
        animation: fadeIn 1000ms ease 0s;
    `}
`;

export const Background = styled.div`
    background-image: linear-gradient(transparent, rgb(26, 29, 41));
    position: absolute;
    inset: 0px;
`;

export const Image = styled.img`
    width: 100%;
    opacity: 1; /* modificar */
    transition: opacity 1500ms ease 0s;
    width: 100vw;

    ${({ viewport }) => (viewport?.y < -200 && viewport?.y > -400) && `
        opacity: 0.6;
    `}

    ${({ viewport }) => (viewport?.y < -401 && viewport?.y > -600) && `
        opacity: 0.4;
    `}

    ${({ viewport }) => (viewport?.y < -601) && `
        opacity: 0.2;
    `}
`;

export const Section = styled.div`
    background-color: transparent;

    /* ${({ bgURL }) => bgURL && `
        background-image: url(${bgURL});
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% auto;
        // filter: opacity(90%);
    `} */
`;

export const BrandLogo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 27vh;

    @media ${device['lg']}{
        margin-top: 32vh;
    }
`;

export const Logo = styled.img`
    margin: 0 auto;
    width: 35%;
    min-width: 200px;
    max-width: 600px;
    height: auto;
    z-index: 0;
`;

export const BrandButton = styled.div`
    text-align: center;
    margin: 15px auto;
    z-index: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    padding: 0;
`;

export const GroupCollection = styled.div`
    overflow: hidden;
`;

export const Collection = styled.div`

`;
