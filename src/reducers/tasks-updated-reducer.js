import { TASKS_UPDATED } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case TASKS_UPDATED:
      return action.payload;
    default:
      return false;
  }
};
