const input = document.getElementById('input');
const btn = document.getElementById('btn');
const content = document.getElementById('content');

function addItem() {
    if(input.value) {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<input type="checkbox"> ${input.value} <i class="fa-solid fa-xmark"></i>`;

    content.appendChild(listItem);
    }
}