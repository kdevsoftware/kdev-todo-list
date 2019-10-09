import React, { Component } from 'react';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import './index.scss';

import TodoList from '../../components/todo-list';
import { HOME, OFFICE } from '../../store/constant';

const tabsContent = [
  {
    title: 'HOME',
    content: <TodoList place={HOME} />
  },
  {
    title: 'OFFICE',
    content: <TodoList place={OFFICE} />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

class AppMain extends Component {
  render() {
    return (
      <div className="container my-4 pb-5 main-section">
        <Tabs transform={false} showInkBar={true} items={getTabs()} />
      </div>
    );
  }
}

export default AppMain;
