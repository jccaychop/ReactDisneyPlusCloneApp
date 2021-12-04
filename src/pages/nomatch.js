import React from 'react';
import { useSelector } from 'react-redux';
import { siteContent } from '../utils/siteContent';
import NoMatchContainer from '../containers/nomatch';

const Nomatch = () => {

    const langSelected = useSelector(state => state.lang.language);
    const siteData = langSelected === 'es-MX' ? siteContent[0] : siteContent[1];

    return (
        <>
            <NoMatchContainer siteData={siteData} />
        </>
    )
}

export default Nomatch
