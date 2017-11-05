import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskList extends Component {
  renderTasks() {
    return this.props.tasks.map((task, index) => {
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

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(TaskList);
