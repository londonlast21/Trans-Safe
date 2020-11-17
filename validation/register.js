const Validator = require('validator');
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';


    if (Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email= "Email is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password = "You must confirm your password";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 20})) {
        errors.password = "Password must be at least 6 characters long"
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must be identical";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};