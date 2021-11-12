import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

export const Container = styled.div`
    div > ul > li{
        opacity: 0.5;
    }
`;

export const Item = styled.div`
    width: 100%;
    height: auto;
    padding-right: 15px;
`;

export const Poster = styled.div`
    width: 100%;
    height: 100%;

    border-radius: 5px;
    border: 4.5px solid transparent;
    transition: all 450ms linear 0s;

    display: flex;

    &:hover{
        position: relative;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        outline: none;
        border-radius: 5px;
        border: 4.5px solid var(--gray-4);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: all 450ms linear 0s;

    &:hover{
        border-radius: 0px;
    }
`;

export const Title = styled.h4`
    font-size: 14px;
    line-height: 1.2;
    padding-top: 5px;

    @media ${device['xxl']}{
        font-size: 15px;
    }
`;

export const Span = styled.span`

`;

export const Text = styled.p`
    color: #B4B4B5;
    font-size: 12px;
    margin-top: 10px;
    line-height: 1.3;

    @media ${device['xxl']}{
        font-size: 13px;
    }
`;
