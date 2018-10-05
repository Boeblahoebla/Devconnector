import axios from 'axios';
import {ADD_POST, GET_ERRORS, GET_POSTS, GET_POST, DELETE_POST, POSTS_LOADING} from './types';

// Add a post
export const addPostAction = postData => dispatch => {
    axios
        .post('/api/posts', postData)
        .then(res => dispatch ({
            type: ADD_POST,
            payload: res.data}))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

// Add a comment
export const addCommentAction = (postId, commentData) => dispatch => {
    axios
        .post(`/api/posts/comment/${postId}`, commentData)
        .then(res => dispatch ({
            type: GET_POST,
            payload: res.data}))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

// Add a like to a post
export const addLikeAction = id => dispatch => {
    axios
        .post(`/api/posts/like/${id}`)
        .then(res => dispatch (getPostsAction()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

// Add a like to a post
export const removeLikeAction = id => dispatch => {
    axios
        .post(`/api/posts/unlike/${id}`)
        .then(res => dispatch (getPostsAction()))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};

// Get Posts
export const getPostsAction = () => dispatch => {

    dispatch(setPostsLoading());

    axios
        .get('/api/posts')
        .then(res => dispatch ({
            type: GET_POSTS,
            payload: res.data}))
        .catch(err => dispatch({
            type: GET_POSTS,
            payload: null
        }))
};

// Get single Posts
export const getSinglePostAction = (id) => dispatch => {

    dispatch(setPostsLoading());

    axios
        .get(`/api/posts/${id}`)
        .then(res => dispatch ({
            type: GET_POST,
            payload: res.data}))
        .catch(err => dispatch({
            type: GET_POST,
            payload: null
        }))
};

// Delete a post
export const deletePostAction = id => dispatch => {
    axios
        .delete(`/api/posts/${id}`)
        .then(res => dispatch ({
            type: DELETE_POST,
            payload: id}))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
};


// Profile loading
export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    }
};