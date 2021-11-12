import React from 'react';
import { Container } from './styles/logo';

const Logo = ({ ...restProps }) => {
    return (
        <Container {...restProps} />
    )
}

export default Logo;
