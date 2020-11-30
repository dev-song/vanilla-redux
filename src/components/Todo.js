import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actionCreators } from '../store';

function Todo({ text, id, onBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(Todo);