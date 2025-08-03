const button = document.getElementById('button');
const inputField = document.getElementById('feedback');

// Initial check
button.disabled = inputField.value === "";

// Add event listener for changes
inputField.addEventListener('input', function() {
    button.disabled = this.value === "";
});