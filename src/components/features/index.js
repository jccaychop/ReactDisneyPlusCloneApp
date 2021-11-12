import React from 'react';
import { Container, Description, Image, Picture, Text, Title } from './styles/features';

const Features = ({ children, ...restProps }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Features;

Features.Description = function FeaturesDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
};

Features.Title = function FeaturesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Features.Text = function FeaturesText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Features.Picture = function FeaturesPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>
};

Features.Image = function FeaturesImage({ ...restProps }) {
    return <Image {...restProps} />
};
