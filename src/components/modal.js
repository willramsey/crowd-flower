import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

class Modal extends Component {
  render() {
    if (this.props.show === null) return null;

    const success = this.props.show;
    let classes = 'alert modal-alert alert-dismissible';
    let alertMessage = '';

    if (success) {
      classes += ' alert-success';
      alertMessage += 'Tasks saved successfully.';
    } else {
      classes += ' alert-danger';
      alertMessage += 'Error saving tasks.';
    }

    return (
      <div className={classes}>
        <span>{alertMessage}</span>
        <button
          href="#"
          className="close btn-close"
          data-dismiss="alert"
          onClick={event => this.props.hideModal()}
          >
            &times;
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.modal
  };
}

export default connect(mapStateToProps, { hideModal })(Modal);
