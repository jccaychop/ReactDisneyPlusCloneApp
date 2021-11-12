import React, { memo } from 'react';
import { Site } from '../components';

const SiteContainer = memo(({ children }) => {
    return (
        <Site>
            {children}
        </Site>
    )
})

export default SiteContainer;
