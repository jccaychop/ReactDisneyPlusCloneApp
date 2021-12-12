import styled from "styled-components/macro";
import { device } from "../../../utils/breakpoints";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 70px;
`;

export const Group = styled.div`
    background-color: #4F5161;
    position: fixed;
    width: 100%;
    z-index: 100;
    padding: 35px 20px;

    i {
        position: absolute;
        cursor: pointer;
        right: 20px;
        font-size: 20px;
        padding: 5px 0;
    }

    @media (min-width: 400px){
        padding: 20px 20px;

        i {
            right: 20px;
            font-size: 30px;
            padding: 5px 0;
        }
    }

    @media (min-width: 850px){
        padding: 20px 20px;

        i {
            font-size: 40px;
            padding: 5px 0;
        }
    }

    @media (min-width: 1200px){
        padding: 20px 39px;

        i {
            right: 39px;
            font-size: 45px;
            padding: 5px 0;
        }
    }

    @media ${device['xxl']}{

        padding: 25px 39px;

        i {
            right: 39px;
            font-size: 50px;
            padding: 10px 0;
        }

    }
`;

export const Input = styled.input`
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--white);
    letter-spacing: 2px;
    caret-color: var(--white);

    &::placeholder{
        color: var(--white);
    }

    &::-ms-input-placeholder{
        color: var(--white);
    }

    @media (min-width: 400px){
        font-size: 30px;
    }

    @media (min-width: 850px){
        font-size: 40px;
    }

    @media (min-width: 1200px){
        font-size: 45px;
    }

    @media ${device['xxl']}{
        font-size: 50px;
    }
`;
