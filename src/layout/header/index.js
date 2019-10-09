import React, { Component } from 'react';

import Logo from '../../asset/image/logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src={Logo} width="50" height="50" alt="" />
        </a>
      </nav>
    );
  }
}

export default AppHeader;
