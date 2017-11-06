import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return null;
    default:
      return state;
  }
};
