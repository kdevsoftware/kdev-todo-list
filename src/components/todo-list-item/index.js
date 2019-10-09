import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeToDo } from '../../store/action';

class TodoListItem extends Component {
  render() {
    const { todoId, todo } = this.props;

    return (
      <div className="shadow-sm card mb-3" key="toDoName">
        <div className="card-body">
          <p className="card-text">{todo.title}</p>
        </div>

        <div className="card-footer text-right">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => this.completeClick(todoId)}
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  completeClick = completeTodoId => {
    const { completeToDo, place } = this.props;
    completeToDo(place, completeTodoId);
  };
}

export default connect(
  null,
  { completeToDo }
)(TodoListItem);
