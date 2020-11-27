import { createStore } from 'redux';

const input = document.getElementById('input');
const form = document.getElementById('todo-form');

const ADD_TODO = 'ADD_TODO';

const todoModifier = (todo = [], action) => {
  console.log(action);

  switch (action.type) {
    case ADD_TODO:
      return [...todo, input.value];
    default:
      return todo;
  }
}

const todoStore = createStore(todoModifier);

const handleSubmit = e => {
  e.preventDefault();

  const todo = input.value;
  input.value = '';
  todoStore.dispatch({ type: ADD_TODO, todo });
}

const initTodo = () => {
  form.addEventListener('submit', handleSubmit);
}

export default initTodo;