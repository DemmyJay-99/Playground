const code = document.getElementById('colorCode');
const changeBtn = document.getElementById('change');
const copyBtn = document.getElementById('copy-btn');

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215);
    return randomColor.toString(16).padStart(6,"0");
}

function changeColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = `#${newColor}`;
    code.textContent = `#${newColor}`;
    changeBtn.style.backgroundColor = `#${newColor}`;
}

function copyToClipboard() {
  const text = colorCode.textContent;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = 'Copied';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
    }, 2000);
  });
}
