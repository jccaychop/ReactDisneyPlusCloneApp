import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Media, Movies } from '../pages';

const MoviesRouter = () => {
    return (
        <>
            <Switch>
                <Route path="/movies/:mediaID" component={Media} />
                <Route exact path="/movies" component={Movies} />
            </Switch>
        </>
    )
}

export default MoviesRouter;
