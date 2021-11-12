import React from 'react';
import { Features } from '../components';

const FeaturesContainer = ({ children, src }) => {
    return (
        <Features>
            {children}
            <Features.Picture>
                <Features.Image src={src} />
            </Features.Picture>
        </Features>
    )
}

export default FeaturesContainer;
