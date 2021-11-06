import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Disney, Marvel, NatGeo, Pixar, StarWars } from '../pages';

const BrandRouter = () => {
    return (
        <>
            <Switch>
                <Route path="/brand/disney" component={Disney} />
                <Route path="/brand/marvel" component={Marvel} />
                <Route path="/brand/natgeo" component={NatGeo} />
                <Route path="/brand/pixar" component={Pixar} />
                <Route path="/brand/starwars" component={StarWars} />
            </Switch>
        </>
    )
}

export default BrandRouter;
