const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const handleAdd = () => {
  console.log('added');
}

const handleMinus = () => {
  console.log('subtracted');
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);