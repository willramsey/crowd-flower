import { ADD_TASK } from './types';

export function addTask() {
  return {
    type: ADD_TASK,
    payload: 'TASK'
  };
}
