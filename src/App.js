import './style/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './components/task-list';
import Modal from './components/modal';
import {
  fetchTasks, addTask, saveTasks, selectTask, tasksUpdated, showModal
} from './actions';


class App extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  handleAddClick() {
    this.props.addTask('TASK');
    this.props.selectTask(0);
    this.props.tasksUpdated(true);
  }

  handleSaveClick() {
    this.props.saveTasks(this.props.tasks, (success) => {
      this.props.showModal(success);
    });
      this.props.tasksUpdated(false);
  }

  render() {
    const enableSave = !this.props.updated;
    return (
      <div className="container">
        <div className="clearfix list-heading">
          <span className="list-heading-title">Tasks</span>
          <div className="float-right">
            <button
              className="btn btn-small btn-add"
              onClick={(e) => this.handleAddClick()}
              >
              Add Task
            </button>
            <button
              className="btn btn-small btn-save"
              disabled={enableSave}
              onClick={(e) => this.handleSaveClick()}
              >
              Save
            </button>
          </div>
        </div>
        <TaskList />
        <Modal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    updated: state.tasksAreUpdated
  };
}

export default connect(mapStateToProps, {
  addTask, saveTasks, selectTask, tasksUpdated, fetchTasks, showModal
})(App);
