import { createStore } from 'redux';

const input = document.getElementById('input');
const form = document.getElementById('todo-form');
const list = document.getElementById('list');

const ADD_TODO = 'ADD_TODO';

const todoModifier = (todo = [], action) => {
  // console.log(action);

  switch (action.type) {
    case ADD_TODO:
      return [...todo, { text: action.text, id: action.id }];
    default:
      return todo;
  }
}

const todoStore = createStore(todoModifier);
const paintTodo = () => {
  list.innerHTML = '';

  const todo = todoStore.getState();
  todo.forEach(item => {
    const li = document.createElement('li');
    li.id = item.id;
    li.textContent = item.text;
    list.appendChild(li);
  })
}
todoStore.subscribe(paintTodo);

const addTodo = text => {
  todoStore.dispatch({ type: ADD_TODO, text, id: Date.now() });
}

const handleSubmit = e => {
  e.preventDefault();

  const todo = input.value;
  input.value = '';
  addTodo(todo);
}

const initTodo = () => {
  form.addEventListener('submit', handleSubmit);
}

export default initTodo;