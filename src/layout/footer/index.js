import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    return (
      <div className="bg-dark text-white fixed-bottom py-3 text-center">
        Copyright &copy; {new Date().getFullYear()} All rights reserved | built
        by kdevsoftware
      </div>
    );
  }
}

export default AppFooter;
