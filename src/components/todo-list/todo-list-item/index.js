import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    return (
      <div class="card text-white bg-dark mb-3">
        <div class="card-body">
          <p class="card-text">To do content</p>
        </div>

        <div class="card-footer text-center">
          <button type="button" class="btn btn-primary">
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default TodoListItem;
