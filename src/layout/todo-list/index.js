import React, { Component, Fragment } from 'react';

import TodoListItem from './todo-list-item';

class TodoList extends Component {
  state = {
    showForm: false,
    formValue: ''
  };

  inputChange = event => {
    this.setState({ formValue: event.target.value });
  };

  render() {
    const { showForm } = this.state;

    return (
      <div>
        <div>
          {this.renderForm()}
          {this.renderToDo()}
        </div>

        <div>
          <button onClick={() => this.setState({ showForm: !showForm })}>
            {showForm ? <i>-</i> : <i>+</i>}
          </button>
        </div>
      </div>
    );
  }

  renderForm = () => {
    const { showForm, formValue } = this.state;

    if (showForm) {
      return (
        <div>
          <form onSubmit={this.formSubmit}>
            <div>
              <input
                value={formValue}
                onChange={this.inputChange}
                id="toDoNext"
                type="text"
              />
              <label htmlFor="toDoNext">What Next?</label>
            </div>
          </form>
        </div>
      );
    }
  };

  renderToDo() {
    const data = {
      home: [
        { value: 'todo - 1' },
        { value: 'todo - 2' },
        { value: 'todo - 3' }
      ],
      office: [
        { value: 'todo - 1' },
        { value: 'todo - 2' },
        { value: 'todo - 3' },
        { value: 'todo - 4' },
        { value: 'todo - 5' },
        { value: 'todo - 6' }
      ]
    };

    let todoRef = data['office'];

    const toDos = todoRef.map(todoItem => {
      return <TodoListItem />;
    });

    if (todoRef.length) {
      return toDos;
    }

    return (
      <div>
        <h1>You have no more things to do!</h1>
      </div>
    );
  }
}

export default TodoList;
