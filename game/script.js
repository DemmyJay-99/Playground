const box = document.getElementById('box');

let movement = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith('Arrow')) {
        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break;
        }
        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
        box.innerText = "😭";
        box.style.backgroundColor = "red";
    }
}

);

document.addEventListener('keyup', event => {
    box.innerText = "😏";
    box.style.backgroundColor = "rgb(150, 53, 198)";
}

)