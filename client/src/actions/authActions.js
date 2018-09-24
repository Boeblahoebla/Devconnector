//////////////
// Imports //
////////////

import { GET_ERRORS } from "./types";
import axios from 'axios';

//////////////
// Actions //
////////////

// Register User Action
export const registerUserAction = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(() => history.push('/login'))
        .catch(err =>
            dispatch({ // dispatch made available through thunk
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};