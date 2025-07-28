const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
};

function clearDisplay(){
    display.value = "";
};

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }    
};

function calculateSin(){
    const input = parseFloat(display.value);
    display.value = Math.sin(input);
};

function calculateCos(){
    const input = parseFloat(display.value);
    display.value = Math.cos(input);
};
// const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];

// <!DOCTYPE html>
// <html>
// <head>
//   <title>Keyboard Calculator</title>
//   <style>
//     body { font-family: Arial; text-align: center; margin-top: 50px; }
//     #display { width: 300px; font-size: 2em; padding: 10px; margin-bottom: 20px; text-align: right; }
//   </style>
// </head>
// <body>

//   <input type="text" id="display" disabled />
  
//   <script>
//     const display = document.getElementById('display');

//     // Allowed keys for calculator
//     const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];

//     document.addEventListener('keydown', (event) => {
//       const key = event.key;

//       if (allowedKeys.includes(key)) {
//         display.value += key; // Append numbers/operators
//       } else if (key === 'Enter' || key === '=') {
//         try {
//           display.value = eval(display.value); // Evaluate expression
//         } catch {
//           display.value = 'Error';
//         }
//       } else if (key === 'Backspace') {
//         display.value = display.value.slice(0, -1); // Remove last character
//       } else if (key === 'c' || key === 'C') {
//         display.value = ''; // Clear display
//       }
//     });
//   </script>

// </body>
// </html>
