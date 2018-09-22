import { SET_CURRENT_USER } from '../actions/types'
import isEmpty from '../../validation/is-empty';

// Create the initial state
const initialAuthState = {
    isAuthenticated: false,
    user: {}
};

// Return the new state after a Redux Action is performed
export default function(state = initialAuthState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}