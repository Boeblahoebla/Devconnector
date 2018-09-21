//////////////
// Imports //
////////////

import { combineReducers } from 'redux';
import authReducer from './authReducer';

//////////////
// Exports //
////////////

export default combineReducers({
    // auth will become a prop for our components
    // authReducer is the reducer that returns a new state
    // when the registerUserAction is triggered in authActions.js
    auth: authReducer
});
