import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TodoListItem from '../todo-list-item';
import * as actions from '../../store/action';

class TodoList extends Component {
  state = {
    showForm: false,
    formValue: ''
  };

  componentWillMount() {
    const { place } = this.props;
    this.props.fetchToDos(place);
  }

  render() {
    const { showForm } = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.setState({ showForm: !showForm })}>
            {showForm ? <i>-</i> : <i>+</i>}
          </button>
        </div>

        <div>
          {this.renderForm()}
          {this.renderToDo()}
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
    const { data, place } = this.props;

    let todoRef = data[place];

    const toDos = _.map(todoRef, (value, key) => {
      return <TodoListItem key={key} place={place} todoId={key} todo={value} />;
    });

    if (!_.isEmpty(toDos)) {
      return toDos;
    }

    return (
      <div>
        <h1>You have no more things to do!</h1>
      </div>
    );
  }

  inputChange = event => {
    this.setState({ formValue: event.target.value });
  };

  formSubmit = event => {
    const { formValue } = this.state;
    const { place, addToDo } = this.props;

    event.preventDefault();

    addToDo(place, { title: formValue });

    this.setState({ formValue: '' });
  };
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(TodoList);
