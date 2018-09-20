// Create the initial state
const initialState = {
    isAuthenticated: false,
    user: {}
};

// Export the resulting state after a Redux Action is performed
export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}