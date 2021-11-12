import React from 'react';
import { Container, ContentOne, ContentTwo, Description, Download, Film, Image, LeftSide, MovieLogo, RightSide, Text, Title } from './styles/promotion';

const Promotion = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Promotion;

Promotion.LeftSide = function PromotionLeftSide({ children, ...restProps }) {
    return <LeftSide {...restProps}>{children}</LeftSide>
};

Promotion.RightSide = function PromotionRightSide({ children, ...restProps }) {
    return <RightSide {...restProps}>{children}</RightSide>
};

Promotion.Image = function PromotionImage({ ...restProps }) {
    return <Image {...restProps} />
};

Promotion.Description = function PromotionDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
};

Promotion.ContentOne = function PromotionContentOne({ children, ...restProps }) {
    return <ContentOne {...restProps}>{children}</ContentOne>
};

Promotion.ContentTwo = function PromotionContentTwo({ children, ...restProps }) {
    return <ContentTwo {...restProps}>{children}</ContentTwo>
};

Promotion.Title = function PromotionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Promotion.Text = function PromotionText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Promotion.Film = function PromotionFilm({ children, ...restProps }) {
    return <Film {...restProps}>{children}</Film>
};

Promotion.MovieLogo = function PromotionMovieLogo({ ...restProps }) {
    return <MovieLogo {...restProps} />
};

Promotion.Download = function PromotionDownload({ children, ...restProps }) {
    return <Download {...restProps}>{children}</Download>
};
