import React from 'react';
import { Header, Logo } from '../components';
import { utilityURL } from '../utils/siteImagesURL';

const HeaderContainer = ({ children, ...restProps }) => {

    return (
        <Header {...restProps}>
            <Header.Logo>
                <Logo src={utilityURL[0]['src']} alt={utilityURL[0]['alt']} />
            </Header.Logo>
            {children}
        </Header>
    )
}

export default HeaderContainer;
