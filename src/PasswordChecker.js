const containerNode = document.getElementById("password-container");
containerNode.style.visibility = "";

/**
 * Checks password and returns if valid or not
 * @param {string} str 
 */
const checkPassword = (str) => {
    let isValid = true;
    isValid = isValid && str.length >= 8;
    isValid = isValid && (str.match(/[a-z]/g) || []).length > 0;
    isValid = isValid && (str.match(/[A-Z]/g) || []).length > 0;
    isValid = isValid && (str.match(/[0-9]/g) || []).length === 1;
    isValid = isValid && (str.match(/[^\w]/g) || []).length === 1;
    return isValid ? "Valid password" : "Invalid password";
}

const buttonNode = document.getElementById("check-password");
const inputNode = document.getElementById("password");
buttonNode.onclick = () => {
    console.log(checkPassword(inputNode.value));
}

