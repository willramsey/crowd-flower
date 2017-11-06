import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTask, editTask, tasksUpdated } from '../actions';

class TaskListItem extends Component {
  handleChange(text, index) {
    this.props.editTask(text, index);
  }

  handleKeyPress(key) {
    if (key === 'Enter') {
      this.props.selectTask(null);
      this.props.tasksUpdated(true);
    }
  }

  render() {
    if (this.props.index === this.props.selected) {
      return (
        <span>
          <input autoFocus
            type="text"
            value={this.props.task}
            onChange={event => this.handleChange(event.target.value, this.props.index)}
            onKeyDown={event => this.handleKeyPress(event.key)}
            onFocus={event => event.target.select()}
            onBlur={event => this.props.selectTask(null)}
          />
        </span>
      );
    }
    return (
      <span onClick={(e) => this.props.selectTask(this.props.index)}>
        {this.props.task}
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    selected: state.selectedTask
  };
}

export default connect(mapStateToProps, { selectTask, editTask, tasksUpdated })(TaskListItem);
