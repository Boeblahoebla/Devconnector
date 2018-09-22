//////////////
// Imports //
////////////

// Redux dependencies
import { createStore, applyMiddleware, compose } from 'redux';

// Redux middleware
import thunk from 'redux-thunk';

// The All the reducers
import allReducers from './reducers/index';

//////////////////////
// Store for Redux //
////////////////////

// initialState variable
const initialRootState = {};

// Assign the Redux middleware
const middleware = [thunk];

// Create the Redux store to use in our full App
const store = createStore(
    allReducers,
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