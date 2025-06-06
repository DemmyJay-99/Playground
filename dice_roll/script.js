    const roll = document.getElementById('roll');


roll.onclick = function(){
    const label = document.getElementById('label');
    const input = document.getElementById('input').value;
    const diceResult = document.getElementById('diceresult');
    const diceImages = document.getElementById('diceimages');

    const values = [];
    const images = [];

    for (let i =0; i < input; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(` <img src="dice/${value}.png" alt= "N">`);
    }

    diceResult.textContent = values.join(",");
    diceImages.innerHTML = images.join(" ");
}