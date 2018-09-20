//////////////
// Imports //
////////////

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//////////////////////
// Store for Redux //
////////////////////

// initialState variable
const initialState = {};

// Assign the Redux middleware
const middleware = [thunk];

// Create the Redux store for our states
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

//////////////
// Imports //
////////////

export default store;