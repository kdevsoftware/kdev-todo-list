import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeToDo } from '../../store/action';

class TodoListItem extends Component {
  render() {
    const { todoId, todo } = this.props;

    return (
      <div class="card text-white bg-dark mb-3" key="toDoName">
        <div class="card-body">
          <p class="card-text">{todo.title}</p>
        </div>

        <div class="card-footer text-center">
          <button
            type="button"
            class="btn btn-primary"
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
