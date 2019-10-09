import React, { Component, Fragment } from 'react';

import AppHeader from './header';
import AppMain from './main';
import AppFooter from './footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </Fragment>
    );
  }
}

export default App;
