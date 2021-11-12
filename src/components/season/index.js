import React from 'react';
import { Container, Image, Item, Poster, Span, Text, Title } from './styles/season';

const Season = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Season;

Season.Item = function SeasonItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Season.Poster = function SeasonPoster({ children, ...restProps }) {
    return <Poster {...restProps}>{children}</Poster>;
};

Season.Image = function SeasonImage({ ...restProps }) {
    return <Image {...restProps} />;
};

Season.Title = function SeasonTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Season.Span = function SeasonSpan({ children, ...restProps }) {
    return <Span {...restProps}>{children}</Span>;
};

Season.Text = function SeasonText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
