import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { finishFetching, setBrandListAction, startFetching } from '../actions/brand';
import { Home, Main, Nomatch } from '../pages';
import { getAllBrands } from '../utils/brandProcessData';
import BrandRouter from './BrandRouter';
import MoviesRouter from './MoviesRouter';
import SeriesRouter from './SeriesRouter';
import SignupRouter from './SignupRouter';
import LoginRouter from './LoginRouter';
import { auth, onAuthStateChanged } from '../firebase/firebaseConfig';
import { Login } from '../actions/authorization';
import SpinnerContainer from './../containers/spinner';

const AppRouter = () => {

    const langSelected = useSelector(state => state.lang.language);
    const brandContent = useSelector(state => state.brand.brandList);
    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        dispatch(startFetching());
        getAllBrands(brandContent, langSelected).then(data => {
            dispatch(setBrandListAction(data));
        });
        dispatch(finishFetching());
        console.log("APP ROUTER GET ALL BRANDS EJECUTE");
    }, [langSelected, dispatch]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(Login(user.uid, user.email));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, isLoggedIn]);

    if (checking) {
        return (
            <SpinnerContainer />
        )
    };

    return (
        <Router>
            <Switch>
                <Route path="/brand" component={BrandRouter} />
                <Route path="/series" component={SeriesRouter} />
                <Route path="/movies" component={MoviesRouter} />

                <Route path="/signup"><SignupRouter isAuthenticated={isLoggedIn} /></Route>
                <Route path="/login"><LoginRouter isAuthenticated={isLoggedIn} /></Route>
                <Route path="/home"><Home isAuthenticated={isLoggedIn} /></Route>
                <Route exact path="/"><Main isAuthenticated={isLoggedIn} /></Route>

                <Route path="*" component={Nomatch} />

                {/* <Route path="/signup" component={SignupRouter} /> */}
                {/* <Route path="/login" component={LoginRouter} /> */}
                {/* <Route path="/home" component={Home} /> */}
                {/* <Route exact path="/" component={Main} /> */}
            </Switch>
        </Router>
    )
}

export default AppRouter;
