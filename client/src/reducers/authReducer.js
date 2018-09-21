import { TEST_DISPATCH } from "../actions/types";

// Create the initial state
const initialAuthState = {
    isAuthenticated: false,
    user: {}
};

// Return the new state after a Redux Action is performed
export default function(state = initialAuthState, action) {
    switch(action.type) {
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}