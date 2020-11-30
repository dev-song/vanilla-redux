import React, { useState } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../store';

import Todo from '../components/Todo';

function Home({ todo, addTodo }) {
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();

    addTodo(text);
    setText('');
  }

  return (
    <>
      <h1>To-do List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write a to-do here"
        />
        <button>Add</button>
      </form>
      <ul>
        {todo.map(item => (<Todo {...item} key={item.id} />))}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { todo: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: text => dispatch(actionCreators.addTodo(text)),
    deleteTodo: id => dispatch(actionCreators.deleteTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);