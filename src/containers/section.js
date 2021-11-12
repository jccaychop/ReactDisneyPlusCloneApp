import React from 'react';
import { Section } from '../components';

const SectionContainer = ({ children }) => {
    return (
        <Section>
            {children}
        </Section>
    )
}

export default SectionContainer;
