import React, { Component } from 'react';
const tasks = [ 'BUY MILK', 'WALK THE DOG', 'TASK' ];

class App extends Component {
  renderTasks() {
    return tasks.map((task, index) => {
      return (
        <li key={index}>
          {task}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="App">
        {this.renderTasks()}
      </div>
    );
  }
}

export default App;
