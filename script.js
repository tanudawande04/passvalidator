const passcrt = document.getElementById("password");


const validatePassword = (password) => {

    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasDigit = false;
    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if (!isNaN(Number(char))) {
            hasDigit = true;
        }
    }
    // Return true if password is valid, false otherwise
    return hasLowerCase && hasUpperCase && hasDigit && password.length >= 8;
}

// Example: You should call this on form submit or input event in the browser
console.log(password);
console.log(validatePassword(passcrt.value))