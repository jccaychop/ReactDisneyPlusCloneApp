import React from 'react';
import { Advertising, Background, Button, Container, Cost, Group, SubGroup, Picture, Text, Title } from './styles/heroEN';


const HeroEN = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default HeroEN;

HeroEN.Advertising = function HeroENAdvertising({ children, ...restProps }) {
    return <Advertising {...restProps}>{children}</Advertising>
};

HeroEN.Picture = function HeroENPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
};

HeroEN.Title = function HeroENTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

HeroEN.Text = function HeroENText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

HeroEN.Group = function HeroENGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};

HeroEN.SubGroup = function HeroENSubGroup({ children, ...restProps }) {
    return <SubGroup {...restProps}>{children}</SubGroup>
};

HeroEN.Cost = function HeroENCost({ children, ...restProps }) {
    return <Cost {...restProps}>{children}</Cost>
};

HeroEN.Button = function HeroENButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
};

HeroEN.Background = function HeroENBackground({ children, ...restProps }) {
    return <Background {...restProps} />
};
