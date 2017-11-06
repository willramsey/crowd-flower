import {
  FETCH_TASKS, SAVE_TASKS, ADD_TASK, DELETE_TASK, EDIT_TASK,
  SELECT_TASK, TASKS_UPDATED, SAVE_ALERT, SHOW_MODAL, HIDE_MODAL } from './types';
import axios from 'axios';

const myName = 'willramsey';
const url = `https://cfassignment.herokuapp.com/${myName}/tasks`;
const dummyTasks = ["WALK THE DOG", "BUY MILK", "TASK"];

export function fetchTasks() {
  const request = axios.get(url);
  console.log('request', request);
  return {
    type: FETCH_TASKS,
    payload: request
  };
}

export function saveTasks(tasks) {
  const request = axios.post(url, tasks);
  console.log('post request', request);
  return {
    type: SAVE_TASKS,
    payload: request
  };
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
