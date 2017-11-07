import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, selectTask, tasksUpdated } from '../actions';
import TaskListItem from './task-list-item';

class TaskList extends Component {
  handleClick(idx) {
    this.props.selectTask(idx);
  }

  handleDelete(index) {
    this.props.deleteTask(index);
    this.props.tasksUpdated(true);
  }

  renderTasks() {
    return this.props.tasks.map((task, index) => {
      return (
        <li key={index} className="list-group-item task-item">
            <TaskListItem task={task} index={index} />
            <span
              className="float-right"
              onClick={event => this.handleDelete(index)}>
                <i className="fa fa-trash-o fa-lg"></i>
            </span>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderTasks()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    selected: state.selectedTask
  };
}

export default connect(mapStateToProps, {
  deleteTask, selectTask, tasksUpdated
})(TaskList);
