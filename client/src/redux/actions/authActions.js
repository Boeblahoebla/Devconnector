//////////////
// Imports //
////////////

// Action types
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// JWT token
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

// Async functionality to REST endpoints
import axios from 'axios';

//////////////
// Actions //
////////////

// Register User Action
export const registerUserAction = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login User Action
export const loginUserAction = (userData) => dispatch => {
    axios
        .post('/api/user/login', userData)
        .then(res => {
            // Save the JWT to localstorage
            const { token } = res.data;
            // Set token to localstorage
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Extract the user from the data contained in the token
            const decoded = jwt_decode(token);
            // Set the current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

/////////////////////
// Helper methods //
///////////////////

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};