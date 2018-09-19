//////////////
// Imports //
////////////

const Validator = require('validator');
const isEmpty = require('./is-empty');

//////////////
// Exports //
////////////

module.exports = function validatePostInput(data) {
    // Create an empty errors object
    let errors = {};

    // Treat the fields to be validated as an empty string when not filled in
    data.text = !isEmpty(data.text) ? data.text : '';

    // Fill the errors object according to the following rules for registration input
    if (!Validator.isLength(data.text, { min:10, max:300 })) {
        errors.text = 'Post must be between 10 and 300 characters';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text is required';
    }

    // Return errors object and validation boolean
    return {
        errors,
        isValid: isEmpty(errors)
    }
};