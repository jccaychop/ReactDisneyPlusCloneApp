import React from 'react';
import {
    Container,
    Form,
    Picture,
    Logo,
    LogoLink,
    Title,
    Text,
    Input,
    Button,
    Group,
    Step,
    Span,
    Checkbox,
    CheckboxGroup,
    Label,
    Agreement,
    Background
} from './styles/signup';

const Signup = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Signup;

Signup.LogoLink = function SignupLogoLink({ children, ...restProps }) {
    return <LogoLink {...restProps}>{children}</LogoLink>
};

Signup.Picture = function SignupPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
};

Signup.Logo = function SignupLogo({ ...restProps }) {
    return <Logo {...restProps} />
};

Signup.Step = function SignupStep({ children, ...restProps }) {
    return <Step {...restProps}>{children}</Step>
};

Signup.Title = function SignupTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Signup.Form = function SignupForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
};

Signup.Input = function SignupInput({ children, ...restProps }) {
    return <Input {...restProps} />
};

Signup.Button = function SignupButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
};

Signup.Group = function SignupGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};

Signup.Text = function SignupText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Signup.CheckboxGroup = function SignupCheckboxGroup({ children, ...restProps }) {
    return <CheckboxGroup {...restProps}>{children}</CheckboxGroup>
};

Signup.Span = function SignupSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>
};

Signup.Checkbox = function SignupCheckbox({ children, ...restProps }) {
    return <Checkbox {...restProps} />
};

Signup.Label = function SignupLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
};

Signup.Agreement = function SignupAgreement({ children, ...restProps }) {
    return <Agreement {...restProps}>{children}</Agreement>
};

Signup.Background = function SignupBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
};
