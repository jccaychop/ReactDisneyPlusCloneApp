import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device['lg']}{
        flex-direction: row;
    }
`;

export const LeftSide = styled.div`
    flex: 1;
    padding-top: 24px;

    @media ${device['lg']}{
        padding-right: 6%;
    }
`;

export const RightSide = styled.div`
    flex: 1;
    padding-top: 24px;
    display: flex;
    flex-wrap: wrap;

    div:first-child{
        padding-right: 8px;

        @media ${device['xs']}{
            padding-right: 15px;
        }

        @media ${device['xs']}{
            padding-right: 30px;
        }
    }
`;

export const Title = styled.h3`
    font-size: 24px;
    padding-bottom: 24px;
`;

export const Overview = styled.p`
    font-size: 20px;
    line-height: 1.2;

    @media ${device['lg']}{
        line-height: 1.5;
    }
`;

export const Group = styled.div`
    flex: 1;
`;

export const List = styled.ul`
    list-style: none;
`;

export const Item = styled.li`
    font-size: 15px;
    padding-bottom: 15px;
`;

export const ItemLabel = styled.p`
    color: #B4B4B6;
    padding-bottom: 5px;
`;

export const ItemText = styled.span`
    margin-bottom: 4px;
    line-height: 1.2;
`;

export const CastList = styled.ul`
    list-style: none;
`;

export const CastItem = styled.li`
    padding-bottom: 4px;
`;

export const Rating = styled.img`
    height: 20px;
`;
