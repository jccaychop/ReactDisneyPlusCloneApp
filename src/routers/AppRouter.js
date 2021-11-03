import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Disney, Home, Login, Marvel, Media, Movies, NatGeo, Pixar, Series, Signup, StarWars } from '../pages';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/series/:mediaID" component={Media} />
                <Route path="/movies/:mediaID" component={Media} />
                <Route exact path="/series" component={Series} />
                <Route exact path="/movies" component={Movies} />
                <Route path="/brand/disney" component={Disney} />
                <Route path="/brand/marvel" component={Marvel} />
                <Route path="/brand/natgeo" component={NatGeo} />
                <Route path="/brand/pixar" component={Pixar} />
                <Route path="/brand/starwars" component={StarWars} />
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
