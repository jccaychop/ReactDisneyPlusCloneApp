import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 70px;
`;

export const Group = styled.div`
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: var(--background);
    padding: 20px 25px;

    @media (min-width: 400px){
        display: flex;
        align-items: center;
    }

    @media ${device['xl']}{
        padding: 30px 40px;
    }
`;

export const Title = styled.span`
    margin-right: 40px;
    font-size: 30px;
    font-weight: bold;

    @media ${device['xxl']}{
        font-size: 44px;
    }
`;

export const Select = styled.select`
    border-radius: 20px;
    margin-top: 5px;
    padding: 7px 15px;
    width: 100%;
    outline: none;
    border: none;
    background-color: #101710;
    color: var(--white);
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url('./img/chevron-down-solid.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;
    background-size: 15px;

    @media (min-width: 400px){
        margin: 0;
    }

    @media ${device['sm']}{
        width: auto;
    }

    @media ${device['xxl']}{
        padding: 7px 20px;
        min-width: 350px;
        font-size: 20px;
    }
`;

export const Option = styled.option`

`;

export const Media = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 120px;
    padding: 0 10px;
    margin-bottom: 15px;
    z-index: 50;
    position: relative;
    min-height: calc(70vh - 170px);

    @media (min-width: 400px){
        margin-top: 90px;
    }

    @media ${device['xl']}{
        margin-top: 100px;
        padding: 0 30px;
    }

    @media ${device['xxl']}{
        margin-top: 120px;
    }
`;

export const NavLink = styled(ReactRouterLink)`
    width: 100%;
    padding: 10px;
    position: relative;
    transition: all 250ms ease;

    &:hover{
        /* padding: 0; */
        padding: 5.5px;
    }

    @media (min-width: 400px){
        width: 50%;
    }

    @media ${device['sm']}{
        width: calc(100% / 3);
    }

    @media (min-width: 850px){
        width: 25%;
    }

    @media ${device['xxl']}{
        width: 20%;
    }
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 8px;
    transition: all 250ms ease;

    &:hover{
        transform: scale(1.01);
        border: 4.5px solid var(--gray-4);
    }
`;
