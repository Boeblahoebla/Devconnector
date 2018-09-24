//////////////
// Imports //
////////////

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from './reducers';

//////////////////////
// Store for Redux //
////////////////////

// initialState variable
const initialRootState = {};

// Assign the Redux middleware
const middleware = [thunk];

// Create the Redux store for our states
const store = createStore(
    combinedReducer,
    initialRootState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

//////////////
// Exports //
////////////

export default store;