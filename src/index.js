import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

/* Reducer
  It modifies the data (varies with Actions)
  Then it returns modified data to be the new data (State)
*/
const countModifier = (count = 0, action) => {
  console.log(count, action);

  // 'if' statement can be used
  // but the more a number of actions increase,
  // the more 'switch' statement looks organized
  switch (action.type) {
    case 'ADD':
      return count + 1;
    case 'MINUS':
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });