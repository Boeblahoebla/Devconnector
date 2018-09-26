import axios from 'axios';
import {
    GET_PROFILE,
    PROFILE_LOADING,
    GET_ERRORS,
    CLEAR_CURRENT_PROFILE} from '../actions/types'

// Get the current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());

    // Request to REST endpoint
    axios.get('/api/profile')
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        // if no profile yet,
        // just dispatch GET_PROFILE with the payload of an empty object
        .catch(err => dispatch({
            type: GET_PROFILE,
            payload: {}
        }))
};

// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
};

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
};