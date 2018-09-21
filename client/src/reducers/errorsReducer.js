import { GET_ERRORS } from '../actions/types';

// Create the initial state
const initialAuthState = {};

// Return the new state after a Redux Action is performed
export default function(state = initialAuthState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}