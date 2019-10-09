import React, { Component, Fragment } from 'react';
import AppHeader from './header';
import AppFooter from './footer';
import TodoList from './todo-list';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader />
        <TodoList />
        <AppFooter />
      </Fragment>
    );
  }
}

export default App;
