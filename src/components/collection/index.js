import React from 'react';
import { Container, Item, NavLink, Poster, Title } from './styles/collection';

const Collection = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Collection;

Collection.Title = function CollectionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Collection.Item = function CollectionItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
};

Collection.NavLink = function CollectionNavLink({ children, ...restProps }) {
    return <NavLink {...restProps}>{children}</NavLink>
};

Collection.Poster = function CollectionPoster({ children, ...restProps }) {
    return <Poster {...restProps} />
};
