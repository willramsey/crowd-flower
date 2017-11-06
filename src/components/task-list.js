import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, selectTask, tasksUpdated } from '../actions';
import _ from 'lodash';
import TaskListItem from './task-list-item';

class TaskList extends Component {
  handleClick(idx) {
    // this.props.deleteTask(idx);
    this.props.selectTask(idx);
  }

  handleDelete(index) {
    this.props.deleteTask(index);
    this.props.tasksUpdated(true);
  }

  renderTasks() {
    return this.props.tasks.map((task, index) => {
      return (
        <div key={index}>
          <TaskListItem task={task} index={index} />
          <button onClick={event => this.handleDelete(index)}>Delete</button>
        </div>
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
    tasks: state.tasks,
    selected: state.selectedTask
  };
}

export default connect(mapStateToProps, { deleteTask, selectTask, tasksUpdated })(TaskList);
