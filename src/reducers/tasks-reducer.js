import { ADD_TASK } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [ action.payload, ...state ];
    default:
      return [ 'BUY MILK', 'WALK THE DOG', 'TASK' ];
  }
};
