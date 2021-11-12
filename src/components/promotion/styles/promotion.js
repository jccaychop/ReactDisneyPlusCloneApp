import styled from "styled-components/macro";
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const LeftSide = styled.div`
    flex: 1;
    height: 100%;
    width: auto;

    ${({ desktopview }) => desktopview && `
        position: relative;
    `}
`;

export const RightSide = styled.div`
    flex: 1;
    height: 100%;
    width: auto;
    margin: auto 0;
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;

    @media (min-width: 768.1px){
        width: 70%;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ mobileview }) => mobileview && `
        @media (min-width: 768.1px){
            display: none;
        }
    `}

    ${({ desktopview }) => desktopview && `
        @media (max-width: 768.1px){
            display: none;
        }

        position: absolute;
        bottom: 0;
        left: 0;
        height: 25%;
        width: 100%;
        border: 1px solid red;
        flex-direction: initial;
        align-items: flex-end;
    `}
`;

export const ContentOne = styled.div`
    ${({ mobileview }) => mobileview && `
        @media (min-width: 768.1px){
            display: none;
        }
    `}
`;

export const ContentTwo = styled.div`
    display: flex;
`;

export const Title = styled.h2`
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;

    ${({ desktopview }) => desktopview && `
        @media (max-width: 768px){
            display: none;
        }
    `}

    @media ${device['md']}{
        font-size: 28px;
        text-align: center;
        margin-right: 50px;
    }

    @media (min-width: 768.1px){
        font-size: 34px;
        text-align: left;
    }

    @media ${device['xxxl']}{
        font-size: 42px;
    }
`;

export const Text = styled.p`
    font-size: 13.9px;
    color: var(--gray);
    text-align: center;
    line-height: 1.4;
    margin-bottom: 20px;

    @media ${device['sm']}{
        font-size: 16px;
    }

    ${({ desktopview }) => desktopview && `
        @media (max-width: 768px){
            display: none;
        }
    `}

    @media ${device['md']}{
        font-size: 18px;
    }

    @media (min-width: 768.1px){
        margin-right: 90px;
        text-align: left;
    }

    @media ${device['xxxl']}{
        font-size: 20px;
    }
`;

export const Film = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768.1px){
        flex-direction: row;
        width: 100%;
        height: 100%;

        flex-direction: initial;
        margin-left: 5%;
    }
`;

export const MovieLogo = styled.img`
    width: 100%;
    margin-bottom: 15px;

    @media ${device['sm']}{
        margin-bottom: 35px;
    }

    @media (min-width: 768.1px){
        flex-direction: row;
    }

    @media (min-width: 768.1px){
        max-width: 45%;
        margin-bottom: 0;
        margin-right: 15px;
    }
`;

export const Download = styled.button`
    background-color: transparent;
    border: 2px solid var(--white);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        height: 30px;
        width: auto;

        @media ${device['sm']}{
            height: 80px;
        }

        @media (min-width: 768.1px){
            height: 100%;
        }
    }

    &:hover {
        background-color: black;
        filter: invert(100%);
    }

    @media (min-width: 768.1px){
        justify-content: flex-end;
        align-items: flex-end;
        margin-bottom: -8%;
        height: 40%;
    }
`;
