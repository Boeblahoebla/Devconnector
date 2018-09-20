//////////////
// Imports //
////////////

import { combineReducers } from 'redux';
import authReducer from './authReducer';

//////////////
// Exports //
////////////

export default combineReducers({
    auth: authReducer
});
