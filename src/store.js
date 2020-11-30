import { createStore } from 'redux';

const ADD_TODO = 'ADD';
const DELETE_TODO = 'DELETE';

// Action Creators
const addTodo = text => ({
  type: ADD_TODO,
  text,
  id: Date.now()
});

const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

const actionCreators = {
  addTodo,
  deleteTodo
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        text: action.text,
        id: action.id,
      };

      return [...state, newTodo];
    case DELETE_TODO:
      return [...state.filter(item => item.id !== action.id)];
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export { actionCreators };
export default store;