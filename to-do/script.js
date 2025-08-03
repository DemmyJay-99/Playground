const input = document.getElementById('input');
const btn = document.getElementById('btn');
const content = document.getElementById('content');

function addItem() {
    if(input.value) {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<input type="checkbox" class="check"> ${input.value} <i class="fa-solid fa-xmark" onclick="deleteItem()"></i>`;

    content.appendChild(listItem);
    listItem.querySelector('i').addEventListener('click', () =>{
        listItem.remove();
    })

    listItem.querySelector('.check').addEventListener('change', () =>{
        listItem.classList.toggle('done');
    })
    }
}