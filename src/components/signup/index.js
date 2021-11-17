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
    Background,
    AgreementGroup,
    Shadow,
    Accept,
    PasswordGroup,
    SuggestionEmail,
    OffersGroup,
    InputGroup,
    InputGroupRow
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

Signup.Input = function SignupInput({ ...restProps }) {
    return <Input {...restProps} />
};

Signup.PasswordGroup = function SignupPasswordGroup({ children, ...restProps }) {
    return <PasswordGroup {...restProps}>{children}</PasswordGroup>
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

Signup.OffersGroup = function SignupOffersGroup({ children, ...restProps }) {
    return <OffersGroup {...restProps}>{children}</OffersGroup>
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

Signup.AgreementGroup = function SignupAgreementGroup({ children, ...restProps }) {
    return <AgreementGroup {...restProps}>{children}</AgreementGroup>
};

Signup.Shadow = function SignupShadow({ children, ...restProps }) {
    return <Shadow {...restProps}>{children}</Shadow>
};

Signup.Accept = function SignupAccept({ children, ...restProps }) {
    return <Accept {...restProps}>{children}</Accept>
};

Signup.SuggestionEmail = function SignupSuggestionEmail({ children, ...restProps }) {
    return <SuggestionEmail {...restProps}>{children}</SuggestionEmail>
};

Signup.InputGroup = function SignupInputGroup({ children, ...restProps }) {
    return <InputGroup {...restProps}>{children}</InputGroup>
};

Signup.InputGroupRow = function SignupInputGroupRow({ children, ...restProps }) {
    return <InputGroupRow {...restProps}>{children}</InputGroupRow>
};
