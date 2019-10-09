import React, { Component } from 'react';

import TodoList from '../../components/todo-list';
import { HOME, OFFICE } from '../../store/constant';

class AppMain extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <h1>Home</h1>
          <TodoList place={HOME} />
        </div>

        <div className="d-flex flex-column">
          <h1>Office</h1>
          <TodoList place={OFFICE} />
        </div>
      </div>
    );
  }
}

export default AppMain;
