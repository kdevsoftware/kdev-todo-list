import React, { Component } from 'react';

import './index.scss';

class AppFooter extends Component {
  render() {
    return (
      <div className="app-footer bg-light fixed-bottom py-3 text-center">
        {/* Copyright &copy; {new Date().getFullYear()} All rights reserved | built
        by kdevsoftware */}
        {new Date().getFullYear()} - kdevsoftware
      </div>
    );
  }
}

export default AppFooter;
