//////////////
// Imports //
////////////

const Validator = require('validator');
const isEmpty = require('./is-empty');

//////////////
// Exports //
////////////

module.exports = function validateEducationInput(data) {
    // Create an empty errors object
    let errors = {};

    // Treat the fields to be validated as an empty string when not filled in
    data.school = !isEmpty(data.school) ? data.school : '';
    data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    // Fill the errors object according to the following rules for registration input
    if (Validator.isEmpty(data.school)) {
        errors.school = 'School title is required';
    }

    if (Validator.isEmpty(data.degree)) {
        errors.degree = 'Degree is required';
    }

    if (Validator.isEmpty(data.fieldOfStudy)) {
        errors.fieldOfStudy = 'Field of study is required';
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