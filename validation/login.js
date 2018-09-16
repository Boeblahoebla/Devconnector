//////////////
// Imports //
////////////

const Validator = require('validator');
const isEmpty = require('./is-empty');

//////////////
// Exports //
////////////

module.exports = function validateLoginInput(data) {
    // Create an empty errors object
    let errors = {};

    // Treat the fields to be validated as an empty string when not filled in
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // Fill the errors object according to the following rules for registration input
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    // Return errors object and validation boolean
    return {
        errors,
        isValid: isEmpty(errors)
    }
};