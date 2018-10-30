import React, { Component } from 'react';

import './App.css';

class TaskList extends Component{
constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }

  render(){
    const listItems = this.state.items.map(item => <li key={item.id}>{item.text}</li>);
    return (
      <div className="App">
      <header className="App-header">
        Task List
      </header>
      <ol>
      {listItems}
      </ol>
      <form onSubmit={this.handleSubmit}>
      <input
        id="new-todo"
        onChange={this.handleChange}
        value={this.state.text}
       />
      <button>Add Task</button>
      </form>
      </div>
    );
  }
}

export default TaskList;
