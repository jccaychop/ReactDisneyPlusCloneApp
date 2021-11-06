import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Media, Series } from '../pages';

const SeriesRouter = () => {
    return (
        <>
            <Switch>
                <Route path="/series/:mediaID" component={Media} />
                <Route exact path="/series" component={Series} />
            </Switch>
        </>
    )
}

export default SeriesRouter;
