import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

class Modal extends Component {
  render() {
    if (this.props.show === null) return null;

    return (
      <div>
        {this.props.show ? 'success' : 'error'}
        <button onClick={event => this.props.hideModal()}>Dismiss</button>
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
