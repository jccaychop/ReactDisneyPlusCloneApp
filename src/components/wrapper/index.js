import React from 'react';
import { Container } from './styles/wrapper';

const Wrapper = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Wrapper;
