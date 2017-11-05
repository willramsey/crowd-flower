import { FETCH_TASKS, ADD_TASK } from './types';
import axios from 'axios';

const myName = 'willramsey';
const url = `https://cfassignment.herokuapp.com/${myName}/tasks`;

export function fetchTasks() {
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_TASKS,
    payload: request
  };
}

export function addTask() {
  return {
    type: ADD_TASK,
    payload: 'TASK'
  };
}
