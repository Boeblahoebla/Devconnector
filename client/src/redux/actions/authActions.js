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

// Login - Get User Token
export const loginUserAction = userData => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Logout
export const logOutUserAction = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // remove the auth header for future requests
    setAuthToken(false);
    // Set the current user to an empty object
    // which will set isAuthenticated to false
    dispatch(setCurrentUser({}))
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