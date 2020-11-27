import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('count');

const ADD = 'ADD';
const MINUS = 'MINUS';

/* Reducer
  It modifies the data (varies with Actions)
  Then it returns modified data to be the new data (State)
*/
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);
const onChange = () => {
  number.textContent = countStore.getState();
}
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

const initCounter = () => {
  add.addEventListener('click', handleAdd);
  minus.addEventListener('click', handleMinus);
}

export default initCounter;