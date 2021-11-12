import styled from "styled-components/macro";
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`

`;

export const Title = styled.h2`
    font-size: 25.4px;
    text-align: center;
    margin-bottom: 18px;

    @media ${device['xs']}{
        font-size: 26px;
    }

    @media (min-width: 768.1px){
        font-size: 28px;
    }

    @media ${device['lg']}{
        font-size: 34px;
    }

    @media ${device['xxxl']}{
        font-size: 42px;
    }
`;

export const Text = styled.p`
    font-size: 14px;
    text-align: center;
    color: var(--gray);
    line-height: 22px;
    margin-bottom: 25px;

    @media ${device['sm']}{
        font-size: 16px;
    }

    @media (min-width: 768.1px){
        font-size: 18px;
    }

    @media ${device['xxxl']}{
        font-size: 20px;
    }
`;

export const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

export const Item = styled.img`
    width: calc(100%);
    padding: 10px;
    border-radius: 5px;

    @media ${device['sm']}{
        width: calc(50%);
    }

    @media (min-width: 768.1px){
        width: calc(100%/3);
    }
`;
