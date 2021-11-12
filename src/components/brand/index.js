import React from 'react';
import { Background, BrandLogo, Collection, Container, GroupCollection, Image, Logo, Multimedia, BrandButton, Section } from './styles/brand';

const Brand = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Brand;

Brand.Multimedia = function BrandMultimedia({ children, ...restProps }) {
    return <Multimedia {...restProps}>{children}</Multimedia>;
};

Brand.Background = function BrandBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
};

Brand.Image = function BrandImage({ ...restProps }) {
    return <Image {...restProps} />;
};

Brand.Section = function BrandSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>;
};

Brand.BrandLogo = function BrandBrandLogo({ children, ...restProps }) {
    return <BrandLogo {...restProps}>{children}</BrandLogo>;
};

Brand.Logo = function BrandLogo({ ...restProps }) {
    return <Logo {...restProps} />;
};

Brand.BrandButton = function BrandBrandButton({ children, ...restProps }) {
    return <BrandButton {...restProps}>{children}</BrandButton>;
};

Brand.GroupCollection = function BrandGroupCollection({ children, ...restProps }) {
    return <GroupCollection {...restProps}>{children}</GroupCollection>;
};

Brand.Collection = function BrandCollection({ children, ...restProps }) {
    return <Collection {...restProps}>{children}</Collection>;
};
