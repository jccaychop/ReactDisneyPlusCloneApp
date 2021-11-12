import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 768.1px){
        flex-direction: row;
    }
`;

export const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768.1px){
        padding-right: 40px;
    }

    @media ${device['lg']}{
        padding-right: 60px;
        align-items: flex-start;
    }
`;

export const Title = styled.h1`
    font-size: 26px;
    text-align: center;
    letter-spacing: 1px;

    @media (min-width: 768.1px){
        font-size: 28px;
        text-align: left;
    }

    @media ${device['lg']}{
        font-size: 34px;
    }

    @media ${device['xxxl']}{
        font-size: 42px;
    }
`;

export const Text = styled.p`
    color: var(--gray);
    font-size: 14px;
    text-align: center;
    line-height: 1.5;
    margin: 0 12px;
    margin-bottom: 20px;

    @media ${device['xs']}{
        margin: 0 4px;
    }

    @media ${device['sm']}{
        font-size: 16px;
        margin: 0 8px;
    }

    @media (min-width: 768.1px){
        font-size: 18px;
        text-align: initial;
        margin: 0;
    }

    @media ${device['xxxl']}{
        font-size: 20px;
    }
`;

export const Picture = styled.div`
    flex: 1;
    height: 100%;
`;

export const Image = styled.img`
    max-width: 100%;

    @media (min-width: 768.1px){
        min-width: 349.5px;
        margin-top: 20px;
    }

    @media ${device['lg']}{
        min-width: 472px;
    }

    @media ${device['xl']}{
        min-width: 560px;
    }

    @media ${device['xxl']}{
        min-width: 660px;
    }
`;