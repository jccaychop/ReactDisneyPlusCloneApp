import React from 'react';
import { Container, Group } from './styles/section';

const Section = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Section;

Section.Group = function SectionGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}
