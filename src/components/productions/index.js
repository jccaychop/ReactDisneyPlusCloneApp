import React from 'react';
import { Container, Images, Item, Text, Title } from './styles/productions';

const Productions = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Productions;

Productions.Title = function ProductionsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Productions.Text = function ProductionsText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};

Productions.Images = function ProductionsImages({ children, ...restProps }) {
    return <Images {...restProps}>{children}</Images>
};

Productions.Item = function ProductionsItem({ ...restProps }) {
    return <Item {...restProps} />
};
