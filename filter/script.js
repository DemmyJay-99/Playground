const all = document.getElementById('all');
const one = document.getElementById('one');
const two = document.getElementById('two');

const showAll = () => {
  all.style.display = 'block';
  one.style.display = 'none';
  two.style.display = 'none';
}

const showOne = () => {
  all.style.display = 'none';
  one.style.display = 'block';
  two.style.display = 'none';
}

const showTwo = () => {
  all.style.display = 'none';
  one.style.display = 'none';
  two.style.display = 'block';
}