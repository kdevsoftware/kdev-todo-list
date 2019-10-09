import React, { Component } from 'react';
import Clock from 'react-live-clock';

import Logo from '../../asset/image/logo.png';

class AppHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary pl-4 pr-5">
        <a className="navbar-brand d-flex align-items-center py-3" href="/">
          <img src={Logo} height="48" alt="" />
          <h3 className="d-inline mb-0 ml-3">Todo List</h3>
        </a>

        <Clock
          className="text-white"
          format={'h:mm:ss A ( MMM Mo, ddd )'}
          ticking={true}
          interval={1000}
        />
      </nav>
    );
  }
}

export default AppHeader;
