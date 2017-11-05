import { combineReducers } from 'redux';
import TasksReducer from './tasks-reducer.js';

const rootReducer = combineReducers({
  tasks: TasksReducer
});

export default rootReducer;
