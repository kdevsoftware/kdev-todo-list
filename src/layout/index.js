import React, { Component, Fragment } from 'react';
import AppHeader from './header';
import AppFooter from './footer';
import TodoList from './todo-list';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader />

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

        <AppFooter />
      </Fragment>
    );
  }
}

export default App;
