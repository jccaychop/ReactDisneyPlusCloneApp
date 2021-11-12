import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Media, Movies } from '../pages';
import { useScroll } from './../hooks/useScroll';

const MoviesRouter = () => {

    const [viewport] = useScroll();

    return (
        <>
            <Switch>
                {/* <Route path="/:mediaTYPE/:mediaID" component={Media} /> */}
                <Route path="/:mediaTYPE/:mediaID">
                    <Media viewport={viewport} />
                </Route>
                <Route exact path="/movies" component={Movies} />
            </Switch>
        </>
    )
}

export default MoviesRouter;
