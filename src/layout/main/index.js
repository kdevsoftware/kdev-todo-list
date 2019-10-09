import React, { Component } from 'react';

import TodoList from '../../components/todo-list';

class AppMain extends Component {
  render() {
    return (
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <h1>Home</h1>
          <TodoList />
        </div>

        <div class="d-flex flex-column">
          <h1>Office</h1>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default AppMain;
