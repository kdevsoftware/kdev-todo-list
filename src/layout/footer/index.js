import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.scss';

class AppFooter extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className="app-footer bg-light fixed-bottom py-3 text-center">
          {/* Copyright &copy; {new Date().getFullYear()} All rights reserved | built
        by kdevsoftware */}
          {new Date().getFullYear()} - kdevsoftware
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default AppFooter;
