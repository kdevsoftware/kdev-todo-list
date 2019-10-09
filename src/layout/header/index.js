import React, { Component } from 'react';

import Logo from '../../asset/image/logo.png';

class AppHeader extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="/">
          <img src={Logo} width="50" height="50" alt="" />
        </a>
      </nav>
    );
  }
}

export default AppHeader;
