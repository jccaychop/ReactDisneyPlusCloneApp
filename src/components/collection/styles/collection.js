import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    margin-bottom: 30px;
    margin: 0 5%;
    margin-bottom: 30px;

    div {
        ul {
            li {
                opacity: 0.5;
            }
        }
    }
`;

export const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 15px;
    z-index: 500;
`;

export const Item = styled.div`
    width: 100%;
    padding-right: 25px;
    outline: none;

    /* transition: all 450ms linear 0s; */

    &:hover{
        position: absolute !important;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
`;

export const NavLink = styled(ReactRouterLink)`
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    outline: none;
`;

export const Poster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    outline: none;
    transition: all 450ms linear 0s;
`;
