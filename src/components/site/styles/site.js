import styled from "styled-components/macro";

export const Container = styled.main`

`;

export const Content = styled.div`
    height: 100%;
`;

export const Background = styled.div`
    background-color: rgb(26, 29, 41);
    position: fixed;
    height: 100vh;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    z-index: -4;

    &::after {
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        transition: opacity 500ms ease 0s;
    }
`;
