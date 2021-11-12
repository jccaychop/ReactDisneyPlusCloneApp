import React from 'react'
import { Circle, CircleGradient, CircleInner, Container } from './styles/spinner';

const Spinner = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Spinner;

Spinner.Circle = function SpinnerCircle({ children, ...restProps }) {
    return <Circle {...restProps}>{children}</Circle>
}

Spinner.CircleGradient = function SpinnerCircleGradient({ children, ...restProps }) {
    return <CircleGradient {...restProps}>{children}</CircleGradient>
}

Spinner.CircleInner = function SpinnerCircleInner({ children, ...restProps }) {
    return <CircleInner {...restProps}>{children}</CircleInner>
}
