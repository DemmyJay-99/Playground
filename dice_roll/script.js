const roll = document.getElementById('roll');
const label = document.getElementById('label');
max = 10;
min = 1;

roll.onmouseover= function(){
    label.textContent = Math.floor(Math.random() * max );
}