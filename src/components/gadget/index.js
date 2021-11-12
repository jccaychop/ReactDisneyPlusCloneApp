import React from 'react';
import { Available, Container, Content, Group, Image, Item, Name, Title } from './styles/gadget';

const Gadget = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Gadget;

Gadget.Title = function GadgetTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Gadget.Content = function GadgetContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>
};

Gadget.Group = function GadgetGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};

Gadget.Image = function GadgetImage({ ...restProps }) {
    return <Image {...restProps} />
};

Gadget.Name = function GadgetName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
};

Gadget.Available = function GadgetAvailable({ children, ...restProps }) {
    return <Available {...restProps}>{children}</Available>
};

Gadget.Item = function GadgetItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
};
