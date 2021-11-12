import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

export const Container = styled.div`
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 26px;
    text-align: center;

    @media(min-width: 768.1px){
        font-size: 28px;
        margin-bottom: 15px;
    }

    @media ${device['lg']}{
        font-size: 34px;
    }

    @media ${device['xxxl']}{
        font-size: 42px;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Group = styled.div`
    width: 100%;
    padding: 8px;
    margin-top: 15px;
    text-align: center;
    font-size: 18px;

    @media(min-width: 318.1px){
        width: 50%;
    }

    @media(min-width: 768.1px){
        width: 25%;
    }
`;

export const Image = styled.img`
    width: 100%;
    margin-bottom: 20px;
`;

export const Name = styled.p`
    margin-bottom: 20px;
    font-weight: bold;

    @media ${device['sm']}{
        font-size: 20px;
    }

    @media(min-width: 768.1px){
        font-size: 22px;
        margin-bottom: 35px;
    }
`;

export const Available = styled.ul`
    color: var(--gray);
`;

export const Item = styled.li`
    list-style: none;
    margin: 7px 0;

    @media(min-width: 768.1px){
        margin: 10px 0;
        line-height: 1.3;
    }

    @media ${device['xxxl']}{
        font-size: 20px;
        line-height: 1.1;
    }
`;
