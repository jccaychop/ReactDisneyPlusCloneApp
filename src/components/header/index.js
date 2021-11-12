import React from 'react';
import { Account, Container, Group, Navbar, NavbarGroup, NavbarItem, NavLink, Picture, Span } from './styles/header';

const Header = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Header;

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
};

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
    return <Navbar {...restProps}>{children}</Navbar>
};

Header.NavbarGroup = function HeaderNavbarGroup({ children, ...restProps }) {
    return <NavbarGroup {...restProps}>{children}</NavbarGroup>
};

Header.NavbarItem = function HeaderNavbarItem({ children, ...restProps }) {
    return <NavbarItem {...restProps}>{children}</NavbarItem>
};

Header.Span = function HeaderSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>
};

Header.NavLink = function HeaderNavLink({ children, ...restProps }) {
    return <NavLink {...restProps}>{children}</NavLink>
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};

Header.Account = function HeaderAccount({ children, ...restProps }) {
    return <Account {...restProps}>{children}</Account>
};
