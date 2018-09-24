//////////////
// Imports //
////////////

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from "./errorsReducer";

//////////////
// Exports //
////////////

export default combineReducers({
    // These will become the new props for our components
    // that refer to their respective reducers
    auth: authReducer,
    errors: errorsReducer
});
