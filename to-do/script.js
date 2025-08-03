const input = document.getElementById('input');
const btn = document.getElementById('btn');
const content = document.getElementById('content');

function addItem() {
    const listItem = document.createElement('li')
    listItem.innerHTML = `${input.value}`;

    content.appendChild(listItem);
}