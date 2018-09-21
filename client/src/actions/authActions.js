//////////////
// Imports //
////////////

import { TEST_DISPATCH } from "./types";

//////////////
// Actions //
////////////

// Register User Action
export const registerUserAction = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    }
};