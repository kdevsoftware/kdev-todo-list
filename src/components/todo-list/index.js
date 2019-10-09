import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      <ReactCSSTransitionGroup
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="position-relative mt-4">
          <button
            className="btn btn-outline-primary mb-5"
            style={{ minWidth: '100px' }}
            onClick={() => this.setState({ showForm: !showForm })}
          >
            {showForm ? <i>Close</i> : <i>Add Item</i>}
          </button>

          {this.renderForm()}
          {this.renderToDo()}
        </div>
      </ReactCSSTransitionGroup>
    );
  }

  renderForm = () => {
    const { showForm, formValue } = this.state;

    if (showForm) {
      return (
        <ReactCSSTransitionGroup
          transitionName="FormAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div>
            <form onSubmit={this.formSubmit}>
              <div
                className="position-absolute d-flex"
                style={{ top: 0, right: 0, width: 'calc(100% - 120px)' }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="What should I do?"
                  value={formValue}
                  onChange={this.inputChange}
                />
              </div>
            </form>
          </div>
        </ReactCSSTransitionGroup>
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
        <h3 className="text-center">No more things to do ...</h3>
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
