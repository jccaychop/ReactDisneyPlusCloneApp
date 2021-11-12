import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { finishFetching, setBrandListAction, startFetching } from '../actions/brand';
import { Home, Login, Main, Signup } from '../pages';
import { getAllBrands } from '../utils/brandProcessData';
import BrandRouter from './BrandRouter';
import MoviesRouter from './MoviesRouter';
import SeriesRouter from './SeriesRouter';

const AppRouter = () => {

    const langSelected = useSelector(state => state.lang.language);
    const brandContent = useSelector(state => state.brand.brandList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startFetching());
        getAllBrands(brandContent, langSelected).then(data => {
            dispatch(setBrandListAction(data));
        });
        dispatch(finishFetching());
        console.log("APP ROUTER GET ALL BRANDS EJECUTE");
    }, [langSelected, dispatch]);

    return (
        <Router>
            <Switch>
                <Route path="/brand" component={BrandRouter} />
                <Route path="/series" component={SeriesRouter} />
                <Route path="/movies" component={MoviesRouter} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
