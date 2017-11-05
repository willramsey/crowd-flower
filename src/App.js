import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './components/task-list';
import { addTask } from './actions';


class App extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.props.addTask()}>Add Task</button> <TaskList />
      </div>
    );
  }
}

export default connect(null, { addTask })(App);
