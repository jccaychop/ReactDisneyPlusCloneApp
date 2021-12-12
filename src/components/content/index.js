import React from 'react';
import { Container, Group, Image, Media, NavLink, Option, Select, Title } from './styles/content';

const Content = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Content;

Content.Group = function ContentGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Content.Title = function ContentTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Content.Select = function ContentSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>;
};

Content.Option = function ContentOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>;
};

Content.Media = function ContentMedia({ children, ...restProps }) {
    return <Media {...restProps}>{children}</Media>;
};

Content.NavLink = function ContentNavLink({ children, ...restProps }) {
    return <NavLink {...restProps}>{children}</NavLink>;
};

Content.Image = function ContentImage({ ...restProps }) {
    return <Image {...restProps} />;
};
