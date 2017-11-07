import {
  FETCH_TASKS, SAVE_TASKS, ADD_TASK, DELETE_TASK, EDIT_TASK,
  SELECT_TASK, TASKS_UPDATED, SHOW_MODAL, HIDE_MODAL
} from './types';
import axios from 'axios';

const myName = 'willramsey';
const url = `https://cfassignment.herokuapp.com/${myName}/tasks`;
// const exampleTasks = ["WALK THE DOG", "BUY MILK", "TASK"];

export const fetchTasks = () => async dispatch => {
  try {
    const res = await axios.get(url);
    dispatch({ type: FETCH_TASKS, payload: res.data });
  }
  catch(error) {
    console.error(error);
  }
}

export const saveTasks = (tasks, callback) => async dispatch => {
  try {
    const res = await axios.post(url, { tasks });
    dispatch({ type: SAVE_TASKS, payload: res.data });
    callback(true);
  }
  catch(error) {
    callback(false);
    console.error(error);
  }
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  };
}

export function editTask(text, index) {
  return {
    type: EDIT_TASK,
    payload: { text, index }
  };
}

export function deleteTask(index) {
  return {
    type: DELETE_TASK,
    payload: index
  };
}

export function selectTask(index) {
  return {
    type: SELECT_TASK,
    payload: index
  };
}

export function tasksUpdated(areUpdated) {
  return {
    type: TASKS_UPDATED,
    payload: areUpdated
  };
}

export function showModal(isSuccess) {
  return {
    type: SHOW_MODAL,
    payload: isSuccess
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    payload: null
  };
}
