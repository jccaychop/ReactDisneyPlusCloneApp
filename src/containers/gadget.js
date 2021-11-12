import React from 'react';
import { Gadget } from '../components';

const GadgetContainer = ({ siteData }) => {

    const { gadget: { title, content } } = siteData;

    return (
        <Gadget>
            <Gadget.Title>{title}</Gadget.Title>
            <Gadget.Content>
                {
                    content.map((gad, i) => {
                        return (
                            <Gadget.Group key={i}>
                                <Gadget.Image src={gad['src']} alt={gad['group']} />
                                <Gadget.Name>{gad['group']}</Gadget.Name>
                                <Gadget.Available>
                                    {
                                        gad['list'].map((item, j) => <Gadget.Item key={j}>{item}</Gadget.Item>)
                                    }
                                </Gadget.Available>
                            </Gadget.Group>
                        )
                    })
                }
            </Gadget.Content>
        </Gadget>
    )
}

export default GadgetContainer;
