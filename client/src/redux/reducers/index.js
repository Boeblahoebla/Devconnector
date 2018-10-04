//////////////
// Imports //
////////////

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from "./errorsReducer";
import profileReducer from "./profileReducer";
import postReducer from './postReducer';

//////////////
// Exports //
////////////

export default combineReducers({
    // auth and errors will become props for our components
    // .. authReducer is the reducer that returns a new state
    //    when the registerUserAction is triggered in authActions.js
    // .. errorsReducer is the reducer that returns errors
    //    when it gets dispatched by an action that produces errors
    auth: authReducer,
    errors: errorsReducer,
    profile: profileReducer,
    post: postReducer
});
