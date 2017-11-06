import _ from 'lodash';
import { FETCH_TASKS, SAVE_TASKS, ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/types';

export default function(state = [], action) {
  if (action.payload) {
    var tasks = action.payload.tasks || [];
  }
  switch (action.type) {
    case FETCH_TASKS:
      return [ ...tasks];
    case SAVE_TASKS:
      return [ ...tasks ];
    case ADD_TASK:
      return [ action.payload, ...state ];
    case DELETE_TASK:
      return state.filter((el, ind) => ind !== action.payload);
    case EDIT_TASK:
      const { text, index } = action.payload;
      const newState = state.slice();
      newState[index] = text;
      return newState;
    default:
      return state;
  }
};
