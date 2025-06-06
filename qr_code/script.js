function generate() {
    const text = document.querySelector(".text").value;
    const qr = document.querySelector(".qr");
    qr.innerHTML="";
    if (!text.trim()) {
        alert("Enter some text man");
        return;
    }
    QRCode.toCanvas(text, {width:150}, function (error, canvas){
        if (error) {
            console.error(error);
            alert("Failed to generate QR code");
            return;
        }
        qr.appendChild(canvas);
    });
}

const theme = document.querySelector('.theme');
theme.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if ( document.body.classList.contains('light-theme')) {
        theme.innerHTML = "🌜";
    } else {
        theme.innerHTML = "☀️";
    };

}
);
