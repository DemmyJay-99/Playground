const button = document.querySelector("button");

function generateQR() {
  const input = document.getElementById("qr").value.trim();
  const img = document.getElementById("qrimg");

  if (!input) {
    alert("Please enter some text or URL");
    return;
  }

  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" +
    encodeURIComponent(input);
  img.classList.add("show");
}

// Generate QR when pressing Enter key
document.getElementById("qr").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    generateQR();
  }
});

button.addEventListener('click', generateQR);