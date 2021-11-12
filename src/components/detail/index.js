import React from 'react';
import { Container, LeftSide, RightSide, Title, Overview, Group, List, Item, ItemLabel, ItemText, Rating, CastList, CastItem } from './styles/detail';

const Detail = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Detail;

Detail.LeftSide = function DetailLeftSide({ children, ...restProps }) {
    return <LeftSide {...restProps}>{children}</LeftSide>;
};

Detail.RightSide = function DetailRightSide({ children, ...restProps }) {
    return <RightSide {...restProps}>{children}</RightSide>;
};

Detail.Title = function DetailTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Detail.Overview = function DetailOverview({ children, ...restProps }) {
    return <Overview {...restProps}>{children}</Overview>;
};

Detail.Group = function DetailGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Detail.List = function DetailList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};

Detail.Item = function DetailItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};

Detail.ItemLabel = function DetailItemLabel({ children, ...restProps }) {
    return <ItemLabel {...restProps}>{children}</ItemLabel>;
};

Detail.ItemText = function DetailItemText({ children, ...restProps }) {
    return <ItemText {...restProps}>{children}</ItemText>;
};

Detail.CastList = function DetailCastList({ children, ...restProps }) {
    return <CastList {...restProps}>{children}</CastList>;
};

Detail.CastItem = function DetailCastItem({ children, ...restProps }) {
    return <CastItem {...restProps}>{children}</CastItem>;
};

Detail.Rating = function DetailRating({ ...restProps }) {
    return <Rating {...restProps} />;
};
