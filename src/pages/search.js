import React from 'react';
import SearchContainer from '../containers/search';

const Search = ({ langSelected, siteData, brandContent }) => {

    return (
        <SearchContainer
            langSelected={langSelected}
            siteData={siteData}
            brandContent={brandContent}
            pictureID={(langSelected === "es-MX") ? 0 : 1}
        />
    )
}

export default Search;
