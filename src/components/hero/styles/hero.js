import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    border: 1px solid white;
    height: 100vh;

    z-index: 90;

    @media (min-width: 768.1px){
        margin-bottom: 200px;
    }

    @media (min-width: 1024.1px){
        flex-direction: row;
        justify-content: start;
        height: calc(100vh - 70px);
    }
`;

export const Background = styled.div`
    width: 100%;
    position: absolute;
    top: 0px;
    background-image: ${({ imgMobile }) => imgMobile && `url(${imgMobile['src']})`};
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;

    @media (min-width: 1024.1px){
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
        width: 550px;
        max-width: 650px;
        margin-top: 37%;
    }

    @media (min-width: 1024.1px){
        margin-top: 0;
        width: 42%;
        margin-left: 30px;
    }

    @media ${device['xxl']}{
        padding-left: 45px;
        max-width: 750px;
    }

    @media (max-height: 620px){
        margin-top: 200px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    max-width: 300px;
    
    @media ${device['xxs']}{
        font-size: 14px;
    }

    @media ${device['sm']}{
        font-size: 16px;
    }

    @media ${device['md']}{
        font-size: 18px;
        max-width: 480px;
    }

    @media ${device['lg']}{
        font-size: 20px;
    }

    @media ${device['xxxl']}{
        font-size: 26px;
    }
`;

export const Text = styled.p`
    margin-top: 15px;
    font-size: 10px;
    color: var(--gray);
    text-align: center;
    line-height: 1.4;
    

    @media ${device['lg']}{
        font-size: 11px;
    }

    @media ${device['xxl']}{
        font-size: 12px;
    }
`;

export const Link = styled(ReactRouterLink)`
    color: var(--white);
    margin-top: 25px;

    @media ${device['sm']}{
        font-size: 16.5px;
    }

    @media ${device['md']}{
        font-size: 18px;
    }
`;

export const Cost = styled.p`
    color: var(--gray);
    text-align: center;
    line-height: 1.4;
    margin-top: 5px;

    @media ${device['sm']}{
        font-size: 16.5px;
    }

    @media ${device['md']}{
        font-size: 18px;
    }
`;

export const Combo = styled.img`
    margin-bottom: 25px;
    width: 150px;

    @media ${device['sm']}{
        width: 200px;
    }

    @media (min-width: 768.1px){
        width: 330px;
    }

    @media ${device['xxl']}{
        width: 380px;
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

    &:hover {
        background-color: var(--blue-2);
    }

    @media ${device['xs']}{
        padding: 12px 10px; 
    }

    @media ${device['sm']}{
        padding: 15px 10px; 
    }

    @media ${device['md']}{
        font-size : 18px;
    }

    @media (min-width: 1024.1px){
        padding: 19px 10px;
    }

    ${({ subsbutton }) => subsbutton && `
        max-width: 210px;
        margin-top: 20px;

        @media ${device['sm']}{
            max-width: 230px;
        }

        @media ${device['md']}{
            max-width: 245px;
        }

        @media ${device['lg']}{
            max-width: 320px;
        }

        @media ${device['xxxl']}{
            max-width: 360px;
        }

        @media (min-width: 1024.1px){
            padding: 19px 10px;
        }
    `}
`;
