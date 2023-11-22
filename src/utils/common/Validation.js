export const validateLoginForm = (formData) => {
    const { username, email, password } = formData;

    return validateUsername(username) || validateEmail(email) || validatePassword(password);
}

export const validateForm = (formData) => {
    const { name, username, email, phone, website } = formData;

    return validateName(name) || validateUsername(username) || validateEmail(email) || validatephone(phone) || validateWebsite(website);
}

const validateName = (name) => {
    if (!name.length) {
        return 'Name is required.';
    }
}

const validateUsername = (username) => {
    // Validate username length
    if (username.length < 8 || username.length > 50) {
        return 'Username must be between 8 and 50 characters.';
    }
    // Validate alphanumeric username
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(username)) {
        return 'Username must be alphanumeric.';
    }
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Invalid email format.';
    }
}
const validatePassword = (password) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < 8 || password.length > 50 || !specialCharRegex.test(password)) {
        return 'Password must be between 8 and 50 characters and contain at least one special character.';
    }
}
const validatephone = (phone) => {
    if (!phone.length) {
        return 'Phone is required.';
    }
}
const validateWebsite = (website) => {
    if (!website.length) {
        return 'Website is required.';
    }
    const websiteRegex = /^www\.[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
    if(!websiteRegex.test(website)){
        return 'Invalid Website format.';
    }
}