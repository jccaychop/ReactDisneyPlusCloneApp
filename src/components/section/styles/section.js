import styled from "styled-components/macro";
import { device } from "../../../utils/breakpoints";

export const Container = styled.section`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid green;

    @media ${device['sm']}{
        padding: 0 30px;
    }

    @media ${device['xxxl']}{
        padding: 0 70px;
    }

    
`;

export const Group = styled.div`
    width: 100%;
    height: 100%;

    max-width: 1440px;
    margin-bottom: 200px;
    border: 1px solid blue;

    &:last-child{
        margin-bottom: 100px;
    }
`;
