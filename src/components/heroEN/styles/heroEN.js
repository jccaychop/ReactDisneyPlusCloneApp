import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    border: 1px solid white;
    height: 100vh;
    padding-bottom: 20vh;

    @media ${device['xs']}{
        padding-bottom: 1vh;
    }

    @media ${device['sm']}{
        padding-top: 5vh;
        padding-bottom: 0px;
    }

    @media (min-width: 668px){
        padding-top: 20vh;
    }

    @media (min-width: 768.1px){
        padding-top: 0px;
        height: 90vh;
        width: 100%;
    }
    @media (min-width: 1920px){
        height: 100vh;
    }
`;

export const Background = styled.img`
    width: 100%;
    position: absolute;
    top: 0px;
    background-image: ${({ imgMobile }) => imgMobile && `url(${imgMobile['src']})`};
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;

    @media (min-width: 768.1px){
        background-image: ${({ imgWeb }) => imgWeb && `url(${imgWeb['src']})`};
    }
`;

export const Advertising = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    z-index: 100;
    margin: 0 auto;
    padding: 0 20px;

    @media ${device['sm']}{
        padding: 0 5px;
    }

    @media (min-width: 768.1px){
        margin-top: 0;
        max-width: 100%;
        width: 769px;
        padding: 0 30px;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0;
    }

    @media ${device['lg']}{
        padding: 0;
        padding-left: 4%;
    }
`;

export const Picture = styled.picture`
    width: 42.5%;
    max-width: 160px;
    height: auto;

    margin-bottom: 15px;
`;

export const Title = styled.h2`
    font-size: 20px;
    text-align: center;

    @media ${device['sm']}{
        font-size: 24px;
    }

    @media (min-width: 768.1px){
        width: 40%;
        text-align: start;
        font-size: 28px;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    @media ${device['lg']}{
        font-size: 36px;
        width: 50%;
    }

    @media ${device['xxxl']}{
        font-size: 44px;
        width: 60%;
    }
`;

export const Group = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768.1px){
        flex-direction: row;
    }
`;

export const SubGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px 0;

    @media ${device['sm']}{
        width: 340px;
    }

    @media (min-width: 768.1px){
        width: 50%;
        padding-right: 29px;
    }

    ${({ withLine }) => withLine && `
        border-bottom: 1px solid var(--gray);

        @media (min-width: 768.1px){
            border-bottom: none;
        }
    `}
`;

export const Cost = styled.p`
    font-size: 24px;
    text-align: center;
    margin-bottom: 4px;
    font-weight: bold;

    span {
        font-size: 14px;
        color: var(--gray);
    }

    @media (min-width: 768.1px){
        font-size: 26px;
        text-align: start;
    }

    @media ${device['lg']}{
        font-size: 28px;
    }

    @media ${device['xxxl']}{
        font-size: 30px;
    }
`;

export const Button = styled(ReactRouterLink)`
    width: 100%;
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 1.5px;
    line-height: 22px;
    text-align: center;
    border-radius: 5px;
    outline: none;
    background-color: var(--blue-1);
    padding: 10px 10px;
    transition: all 0.5s ease;

    @media (min-width: 768.1px){
        margin-top: 10px;
        font-size: 18px;
        padding: 15px 10px;
    }
`;

export const Text = styled.p`
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    color: var(--gray);
    line-height: 1.5;
    margin-top: 25px;

    @media (min-width: 768.1px){
        margin-top: 10px;
    }

    @media ${device['lg']}{
        font-size: 11px;
    }

    @media ${device['xxxl']}{
        font-size: 12px;
    }
`;
