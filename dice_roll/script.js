    const roll = document.getElementById('roll');
    var input = document.getElementById('input');


    const addBtn = document.getElementById('add');
    const subtractBtn = document.getElementById('subtract');

    addBtn.addEventListener('click', add);

    function add() {
        const newValue = parseInt(input.textContent) +1;
        
    if (newValue > 6) {
        newValue = 6;
    };
        input.textContent = newValue;
    };

        subtractBtn.addEventListener('click', subtract);

    function subtract() {
        const newValue = parseInt(input.textContent) -1;
    if (newValue < 1) {
        newValue = 1;
    };
        input.textContent = newValue;
    }



roll.onclick = function(){
    const label = document.getElementById('label');
    const diceResult = document.getElementById('diceresult');
    const diceImages = document.getElementById('diceimages');

    const values = [];
    const images = [];

    for (let i =0; i < input.textContent; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(` <img src="dice/${value}.png" alt= "N">`);
    }

    diceResult.textContent = values.join(",");
    diceImages.innerHTML = images.join(" ");
}