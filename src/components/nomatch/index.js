import React from 'react'
import { Background, Button, Container, Content, Group, Text, Title } from './styles/nomatch';

const NoMatch = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default NoMatch;

NoMatch.Background = function NoMatchBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
};

NoMatch.Content = function NoMatchContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>;
};

NoMatch.Group = function NoMatchGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

NoMatch.Title = function NoMatchTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

NoMatch.Text = function NoMatchText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

NoMatch.Button = function NoMatchButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
