function Validation(values) {
    let errors = {};
    
    
    // Kiểm tra tên người dùng
    if (!values.username) {
        errors.username = "Username cannot be empty";
    } 

    // Kiểm tra mật khẩu
    if (!values.password) {
        errors.password = "Password cannot be empty";
    }
    // Không cần kiểm tra mật khẩu phức tạp nữa

    return errors;
}

// Example usage
const values = {
    username: "example@example.com",
    password: "123456" // Example of a simple password
};

const errors = Validation(values);

if (Object.keys(errors).length > 0) {
    console.log("Errors:", errors);
} else {
    console.log("Validation passed");
}

export default Validation;
