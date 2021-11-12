import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: var(--gray);
    padding: 25px 8px;
    background-color: var(--background);
`;

export const LogoLink = styled(ReactRouterLink)`
    margin-bottom: 15px;
    width: 80px;
`;

export const Picture = styled.picture`
    width: 80px;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    i {
        font-size: 16px;
    }
`;

export const SelectGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover > i{
        color: var(--white);
    }

    &:hover > select{
        color: var(--white);
    }
`;

export const Select = styled.select`
    border: none;
    background-color: transparent;
    color: var(--gray);
    padding: 10px 5px;
    outline: none;
`;

export const Option = styled.option`
    color: var(--black-1);
`;

export const Link = styled.a`
    padding: 10px;
    text-decoration: none;
    color: var(--gray);
    font-weight: bold;

    &:hover {
        color: var(--white);
    }
`;

export const Text = styled.p`
    margin: 10px 0;
    text-align: center;
    line-height: 1.5;
    max-width: 1024px;
    font-weight: bold;
`;
