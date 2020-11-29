import React, { useState } from 'react';

function Home() {
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();

    // Do something with event or variables
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
      <ul></ul>
    </>
  );
}

export default Home;