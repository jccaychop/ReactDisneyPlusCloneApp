import React from 'react';
import { useParams } from 'react-router';

const Media = () => {

    const { mediaID } = useParams();

    return (
        <div>
            MEDIA PAGE - MEDIA ID = {mediaID}
        </div>
    )
}

export default Media;
