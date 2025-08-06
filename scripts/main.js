const all = document.getElementById('all');
const one = document.getElementById('utility');
const two = document.getElementById('fun');

const showAll = () => {
  all.style.display = 'flex';
  one.style.display = 'none';
  two.style.display = 'none';
}

const showOne = () => {
  all.style.display = 'none';
  one.style.display = 'flex';
  two.style.display = 'none';
}

const showTwo = () => {
  all.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'flex';
}