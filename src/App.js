import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskList from './components/task-list';
import Modal from './components/modal';
import { fetchTasks, addTask, saveTasks, selectTask, tasksUpdated, showModal } from './actions';


class App extends Component {
  componentDidMount() {
    this.props.fetchTasks();
    this.props.showModal(false);
  }

  handleAddClick() {
    this.props.addTask('Enter Task');
    this.props.selectTask(0);
    this.props.tasksUpdated(true);
  }

  handleSaveClick() {
    console.log('save click: tasks', this.props.tasks);
    this.props.saveTasks(this.props.tasks);
    this.props.tasksUpdated(false);
  }

  render() {
    const enableSave = !this.props.updated;
    return (
      <div>
        <button onClick={(e) => this.handleAddClick()}>Add Task</button>
          <button disabled={enableSave} onClick={(e) => this.handleSaveClick()}>Save</button>
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

export default connect(mapStateToProps, { addTask, saveTasks, selectTask, tasksUpdated, fetchTasks, showModal })(App);
