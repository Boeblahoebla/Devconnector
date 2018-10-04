import axios from 'axios';
import {
    GET_PROFILE,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    SET_CURRENT_USER,
    GET_ERRORS,
    GET_PROFILES} from '../actions/types'

// Create a profile
export const createProfileAction = (profileData, history) => dispatch => {
    // Request to REST endpoint
    axios.post('/api/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        }))
};

// Get all profiles
export const getProfilesAction = () => dispatch => {
    dispatch(setProfileLoadingAction());

    axios
        .get('/api/profile/all')
        .then(res => dispatch({
            type: GET_PROFILES,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILES,
            payload: null
        }));
};

// Get the current profile
export const getCurrentProfileAction = () => dispatch => {
    dispatch(setProfileLoadingAction());

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

// Get the profile by handle
export const getProfileByHandleAction = (handle) => dispatch => {
    dispatch(setProfileLoadingAction());

    // Request to REST endpoint
    axios.get(`/api/profile/handle/${handle}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        // if no profile yet,
        // just dispatch GET_PROFILE with the payload of an empty object
        .catch(err => dispatch({
            type: GET_PROFILE,
            payload: null
        }))
};


// Add a new experience to the profile
export const addExperienceAction = (expData, history) => dispatch => {
    axios
        .post('/api/profile/experience', expData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

// Add a new experience to the profile
export const addEducationAction = (eduData, history) => dispatch => {
    axios
        .post('/api/profile/education', eduData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

// Delete an experience from the profile
export const deleteExperienceAction = (id) => dispatch => {
    axios
        .delete(`/api/profile/experience/${id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));

    console.log(`${id} erased`);
};

// Delete an experience from the profile
export const deleteEducationAction = (id) => dispatch => {
    axios
        .delete(`/api/profile/education/${id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));

    console.log(`${id} erased`);
};



// Delete account and profile
export const deleteAccountAction = () => dispatch => {
    if(window.confirm('Are you sure you want to delete this account?')) {
        axios.delete('/api/profile')
            .then(res => dispatch({
                type: SET_CURRENT_USER,
                payload:{}
            }))
            .catch(err => dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))

    }
};

// Profile loading
export const setProfileLoadingAction = () => {
    return {
        type: PROFILE_LOADING
    }
};

// Clear profile
export const clearCurrentProfileAction = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
};