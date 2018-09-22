// Create the initial state
const initialAuthState = {
    isAuthenticated: false,
    user: {}
};

// Return the new state after a Redux Action is performed
export default function(state = initialAuthState, action) {
    switch(action.type) {
        default:
            return state;
    }
}