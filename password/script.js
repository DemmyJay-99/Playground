const lengthInput = document.getElementById('length');
const upperCaseCheckbox = document.getElementById('uppercase');
const numberCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copy');

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);

function generatePassword() {
    const length = parseInt(lengthInput.value);
    const useUppercase = upperCaseCheckbox.checked;
    const useNumbers = numberCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;
    
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = lowerCaseLetters;

    useUppercase ? characters += upperCaseLetters : null;
    useNumbers ? characters += numbers : null;
    useSymbols ? characters += symbols : null;
    
    let password = "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
           passwordInput.value = password;
}

 function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value);
    alert('Password copied to clipboard!');
 }














