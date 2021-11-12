import React from 'react'
import { Advertising, Background, Container, Title, Text, Cost, Combo, Link, Button } from './styles/hero';

const Hero = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Hero;

Hero.Background = function HeroBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
};

Hero.Advertising = function HeroAdvertising({ children, ...restProps }) {
    return <Advertising {...restProps}>{children}</Advertising>
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Hero.Text = function HeroText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Hero.Link = function HeroLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
};

Hero.Cost = function HeroCost({ children, ...restProps }) {
    return <Cost {...restProps}>{children}</Cost>
};

Hero.Combo = function HeroCombo({ ...restProps }) {
    return <Combo {...restProps} />
};

Hero.Button = function HeroButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
};
