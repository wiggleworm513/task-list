import React, { Component } from 'react';

import TaskList from './tasklist';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>                
          <TaskList />
      </div>
    );
  }
}

export default App;
