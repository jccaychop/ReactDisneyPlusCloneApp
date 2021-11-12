import React from 'react';
import { Container, Form, Picture, Logo, LogoLink, Title, Input, Button, Group, Text, Link } from './styles/login';

const Login = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Login;

Login.LogoLink = function LoginLogoLink({ children, ...restProps }) {
    return <LogoLink {...restProps}>{children}</LogoLink>
};

Login.Picture = function LoginPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
};

Login.Logo = function LoginLogo({ ...restProps }) {
    return <Logo {...restProps} />
};

Login.Title = function LoginTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Login.Form = function LoginForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
};

Login.Input = function LoginInput({ children, ...restProps }) {
    return <Input {...restProps} />
};

Login.Button = function LoginButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
};

Login.Group = function LoginGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};

Login.Text = function LoginText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Login.Link = function LoginLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
};
