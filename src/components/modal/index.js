import React from 'react';
import { ButtonGroup, Container, GlobalModal, Group, PrimaryButton, SecondaryButton, Text, Title } from './styles/modal';

const Modal = ({ children, ...restProps }) => {
    return (
        <>
            <GlobalModal />
            <Container {...restProps}>
                {children}
            </Container>
        </>
    )
}

export default Modal;

Modal.Group = function ModalGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Modal.Title = function ModalTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Modal.Text = function ModalText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Modal.ButtonGroup = function ModalButtonGroup({ children, ...restProps }) {
    return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

Modal.PrimaryButton = function ModalPrimaryButton({ children, ...restProps }) {
    return <PrimaryButton {...restProps}>{children}</PrimaryButton>;
};

Modal.SecondaryButton = function ModalSecondaryButton({ children, ...restProps }) {
    return <SecondaryButton {...restProps}>{children}</SecondaryButton>;
};
