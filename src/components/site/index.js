import React from 'react';
import { Background, Container, Content } from './styles/site';

const Site = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Site;

Site.Content = function SiteContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
};

Site.Background = function SiteBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
};
