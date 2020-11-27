import { createStore } from 'redux';

const input = document.getElementById('input');
const form = document.getElementById('todo-form');
const list = document.getElementById('list');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = text => ({
  type: ADD_TODO,
  text,
  id: Date.now()
})

const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

const todoModifier = (todo = [], action) => {
  // console.log(action);

  switch (action.type) {
    case ADD_TODO:
      return [...todo, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return [...todo.filter(item => item.id !== action.id)];
    default:
      return todo;
  }
}

const dispatchAddTodo = text => {
  todoStore.dispatch(addTodo(text));
}

const dispatchDeleteTodo = e => {
  const id = parseInt(e.target.parentNode.id);
  todoStore.dispatch(deleteTodo(id));
}

const todoStore = createStore(todoModifier);
const paintTodo = () => {
  list.innerHTML = '';

  const todo = todoStore.getState();
  todo.forEach(item => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DEL';
    deleteBtn.addEventListener('click', dispatchDeleteTodo);
    li.id = item.id;
    li.textContent = item.text;
    li.appendChild(deleteBtn);
    list.appendChild(li);
  })
}
todoStore.subscribe(paintTodo);

const handleSubmit = e => {
  e.preventDefault();

  const todo = input.value;
  input.value = '';
  dispatchAddTodo(todo);
}

const initTodo = () => {
  form.addEventListener('submit', handleSubmit);
}

export default initTodo;