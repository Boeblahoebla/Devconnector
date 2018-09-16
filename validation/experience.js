//////////////
// Imports //
////////////

const Validator = require('validator');
const isEmpty = require('./is-empty');

//////////////
// Exports //
////////////

module.exports = function validateExperienceInput(data) {
    // Create an empty errors object
    let errors = {};

    // Treat the fields to be validated as an empty string when not filled in
    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    // Fill the errors object according to the following rules for registration input
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Job title is required';
    }

    if (Validator.isEmpty(data.company)) {
        errors.company = 'Company is required';
    }

    if (Validator.isEmpty(data.from)) {
        errors.from = 'From date is required';
    }

    // Return errors object and validation boolean
    return {
        errors,
        isValid: isEmpty(errors)
    }
};