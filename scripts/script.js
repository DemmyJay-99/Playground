const btn = document.getElementById('button');
const inputField = document.getElementById('feedback');

// Initial check
btn.disabled = inputField.value === "";

// Add event listener for changes
inputField.addEventListener('input', function() {
    btn.disabled = this.value === "";
});