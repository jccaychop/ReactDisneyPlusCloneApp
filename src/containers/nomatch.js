import React from 'react';
import { useHistory } from 'react-router';
import { NoMatch } from '../components';

const NoMatchContainer = ({ siteData }) => {

    const { no_match: { title, text, button } } = siteData;
    const history = useHistory();

    return (
        <NoMatch>
            <NoMatch.Background />

            <NoMatch.Content>
                <NoMatch.Group>
                    <NoMatch.Title>{title}</NoMatch.Title>
                    <NoMatch.Text>{text}</NoMatch.Text>
                    <NoMatch.Button onClick={() => { history.push("/") }}>{button.text}</NoMatch.Button>
                </NoMatch.Group>
            </NoMatch.Content>
        </NoMatch>
    )
}

export default NoMatchContainer
