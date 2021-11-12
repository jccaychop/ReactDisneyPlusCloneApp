import React from 'react';
import { Footer, Logo } from '../components';
import { utilityURL } from '../utils/siteImagesURL';

const FooterContainer = ({ siteData, language = "", handleChange = () => { } }) => {

    const { footer } = siteData;

    return (
        <Footer>
            <Footer.LogoLink to="/">
                <Footer.Picture>
                    <Logo src={utilityURL[0]['src']} alt={utilityURL[0]['alt']} />
                </Footer.Picture>
            </Footer.LogoLink>

            <Footer.Navbar>
                {
                    (language !== "") && (
                        <Footer.SelectGroup>
                            <i className="fas fa-globe"></i>
                            <Footer.Select onChange={handleChange} value={language} name="language">
                                <Footer.Option value="es-MX">Español</Footer.Option>
                                <Footer.Option value="en-US">English</Footer.Option>
                            </Footer.Select>
                        </Footer.SelectGroup>
                    )
                }
                {
                    footer['links'].map((link, i) => {
                        return (
                            <Footer.Link
                                key={i}
                                href={link['to']}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link['text']}
                            </Footer.Link>
                        )
                    })
                }
            </Footer.Navbar>
            <Footer.Text>{footer['text_1']}</Footer.Text>
            <Footer.Text>{footer['text_2']}</Footer.Text>
        </Footer>
    )
}

export default FooterContainer;
