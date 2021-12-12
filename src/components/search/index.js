import React from 'react';
import { Container, Group, Input } from './styles/search';

const Search = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Search;

Search.Group = function SearchGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Search.Input = function SearchInput({ ...restProps }) {
    return <Input {...restProps} />;
};
