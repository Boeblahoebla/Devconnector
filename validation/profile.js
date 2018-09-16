//////////////
// Imports //
////////////

const Validator = require('validator');
const isEmpty = require('./is-empty');

//////////////
// Exports //
////////////

module.exports = function validateProfileInput(data) {
    // Create an empty errors object
    let errors = {};

    // Treat the fields to be validated as an empty string when not filled in
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';


    // Fill the errors object according to the following rules for registration input
    if(!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be between 2 an 40 characters';
    }

    if(Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required';
    }

    if(Validator.isEmpty(data.status)) {
        errors.status = 'Status is required';
    }

    if(Validator.isEmpty(data.skills)) {
        errors.skills = 'Skils are required';
    }

    if(!isEmpty(data.website)){
        if(!Validator.isURL(data.website)) {
            errors.website = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.youtube)){
        if(!Validator.isURL(data.youtube)) {
            errors.youtube = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.twitter)){
        if(!Validator.isURL(data.twitter)) {
            errors.twitter = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.facebook)){
        if(!Validator.isURL(data.facebook)) {
            errors.facebook = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.linkedIn)){
        if(!Validator.isURL(data.linkedIn)) {
            errors.linkedIn = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.instagram)){
        if(!Validator.isURL(data.instagram)) {
            errors.instagram = 'Not a valid URL';
        }
    }

    // Return errors object and validation boolean
    return {
        errors,
        isValid: isEmpty(errors)
    }
};