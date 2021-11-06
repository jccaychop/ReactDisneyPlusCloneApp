import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { brandReducer } from '../reducers/brandReducer';
import { languageReducer } from '../reducers/languageReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    lang: languageReducer,
    brand: brandReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);
