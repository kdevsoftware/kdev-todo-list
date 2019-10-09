import React, { Component, Fragment } from 'react';

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
        <div>{this.renderForm()}</div>

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
}

export default TodoList;
