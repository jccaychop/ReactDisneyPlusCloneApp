import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.header`
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
    padding: 0 12px;

    picture > img{
        display: none;
        animation: fadeOut 500ms linear;
    }

    @media ${device['lg']}{
        padding: 0 35px;
    }

    ${({ viewportbrand }) => (viewportbrand?.y < -50) && `
        background-color: var(--black-1);

        picture > img{
            display: block;
            animation: fadeIn 500ms linear;
        }
    `}
`;

export const Picture = styled.picture`
    max-height: 43px;
`;

export const Navbar = styled.nav`
    flex: 1;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 1.5px;
    padding-left: 25px;
`;

export const NavbarGroup = styled.ul`
    list-style: none;
`;

export const NavbarItem = styled.li`
    padding: 0 20px;
    display: flex;
    align-items: center;

    &:hover {
        a::after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
`;

export const Span = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

export const NavLink = styled(ReactRouterLink)`
    text-decoration: none;
    color: var(--white);
    padding-top: 3px;
    position: relative;

    &::after {
        content: "";
        height: 2px;
        background: var(--white);
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
    }
`;

export const Group = styled.div`
    display: flex;
`;

export const Account = styled.div`
    width: 240px;
`;
