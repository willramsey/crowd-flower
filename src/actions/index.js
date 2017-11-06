import {
  FETCH_TASKS, SAVE_TASKS, ADD_TASK, DELETE_TASK, EDIT_TASK,
  SELECT_TASK, TASKS_UPDATED, SAVE_ALERT, SHOW_MODAL, HIDE_MODAL } from './types';
import axios from 'axios';

const myName = 'willramsey';
const url = `https://cfassignment.herokuapp.com/${myName}/tasks`;
const exampleTasks = ["WALK THE DOG", "BUY MILK", "TASK"];

export const fetchTasks = () => async dispatch => {
  const res = await axios.get(url);
  dispatch({ type: FETCH_TASKS, payload: res.data });
}

export const saveTasks = tasks => async dispatch => {
  const res = await axios.post(url, { tasks });
  dispatch({ type: SAVE_TASKS, payload: res.data });
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
    type: HIDE_MODAL
  };
}
