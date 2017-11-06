import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

class Modal extends Component {
  render() {
    if (!this.props.show) {
      console.log('success', this.props.success);
      return null;
    }

    return (
      <div>
        {this.props.success ? 'success' : 'error'}
        <button onClick={event => this.props.hideModal()}>Dismiss</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const show = !!state.modal;
  let success;
  if (show) {
    success = state.modal;
    // console.log('success', success);
  }
  return {
    show,
    success
  };
}

export default connect(mapStateToProps, { hideModal })(Modal);
