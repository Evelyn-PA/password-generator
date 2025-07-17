//create character pools
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*()_+";
let numbers = "0123456789";

let passwordLength;

// get the display element
let displayEl = document.querySelector(".display");

//Get the input password length
let passwordLengthInput = document.querySelector("#password-length");
passwordLengthInput.addEventListener("input", function () {
    passwordLength = Number(passwordLengthInput.value);
});

//function of generate password
function generatePassword() {
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 50) {
        alert("Password length must be a number between 8 and 50.");
        return; // Stop the function if the input is invalid
    }

    let password = "";
    let combine = "";
    if (document.querySelector("#all").checked) {
        combine = lowerCase + upperCase + symbols + numbers;
    }
    else if (document.querySelector("#lowercase").checked) {
        combine = lowerCase;
    }
    else if (document.querySelector("#uppercase").checked) {
        combine = upperCase;
    }
    else if (document.querySelector("#symbols").checked) {
        combine = symbols;
    }
    else if (document.querySelector("#numbers").checked) {
        combine = numbers;
    }
    for (let i = 0; i < passwordLength; i++) {
        let random = Math.floor(Math.random() * combine.length);
        password += combine[random];
    }
    displayEl.textContent = password;
    return password;
}

// Function to copy password to clipboard
function copy() {
    let copyEl = displayEl.textContent;

    // Get the message element
    let messageEl = document.querySelector("#message");

    // Check if there's a password to copy
    // use the clipboard API to copy the password to the clipboard
    navigator.clipboard
        .writeText(copyEl)
        .then(() => {
            messageEl.textContent = "Password copied to clipboard!"; // Display success message
            messageEl.style.color = "white"; // Optional: Change color for success messages
            clearMessage();
        })
}

// Function to clear the message after 3 seconds
function clearMessage() {
    setTimeout(() => {
        let messageEl = document.querySelector("#message");
        messageEl.textContent = "";
    }, 900);
}
