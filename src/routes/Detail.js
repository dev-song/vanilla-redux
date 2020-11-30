import React from 'react';
import { connect } from 'react-redux';

function Detail({ todo }) {
  return (
    <>
      <h1>
        {todo?.text}
      </h1>
      <h4>
        Created at: {todo?.id}
      </h4>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const { match: { params: { id } } } = ownProps;

  return { todo: state.find(item => item.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);