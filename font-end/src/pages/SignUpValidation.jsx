function Validation(values) {
    let errors = {};

    // Email regex pattern
    const email_pattern  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate username (assuming username is an email)
    if (!values.username) {
        errors.username = "Username cannot be empty";
    } 

    // Validate email (assuming it should be a separate field in your form)
    if (!values.email) {
        errors.email = "Email cannot be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email is not valid";
    }

    // Validate password
    if (!values.password) {
        errors.password = "Password cannot be empty";
    }
    // Removed complex password validation

    return errors;
}

export default Validation;
