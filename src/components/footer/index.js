import React from 'react';
import { Container, Picture, Navbar, Link, Text, SelectGroup, Select, Option, LogoLink } from './styles/footer';

const Footer = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Footer;

Footer.LogoLink = function FooterLogoLink({ children, ...restProps }) {
    return <LogoLink {...restProps}>{children}</LogoLink>
};

Footer.Picture = function FooterPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
};

Footer.Navbar = function FooterNavbar({ children, ...restProps }) {
    return <Navbar {...restProps}>{children}</Navbar>
};

Footer.SelectGroup = function FooterSelectGroup({ children, ...restProps }) {
    return <SelectGroup {...restProps}>{children}</SelectGroup>
};

Footer.Select = function FooterSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>
};

Footer.Option = function FooterOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>
};

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
};

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};
