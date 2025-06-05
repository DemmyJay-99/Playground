    const celsiusButton = document.getElementById('celsius');
    const fahrenheitButton = document.getElementById('fahrenheit');
    const input = document.getElementById('input');

    celsiusButton.addEventListener('click', convertToCelsius);
    fahrenheitButton.addEventListener('click', convertToFahrenheit);

function convertToCelsius() {
        var value = Number(input.value);
        if (!isNaN(value)) {
            const celsius = (value - 32) * (5/9);
            input.value = celsius;
        };
}

function convertToFahrenheit() {
            var value = Number(input.value);

            if (!isNaN(value)) {
            const fahrenheit = value * (9/5) + 32;
            input.value = fahrenheit;
        };
}

// function fahrenheit() {
//     const fahrenheit = parseFloat(display.value);

//     if(!isNaN(fahrenheit)) {
//         const celsius = (fahrenheit - 32) * 5/9;
//         enter.value = celsius.toFixed(2);
//     } else{
//         enter.value = "";
//     }

// }