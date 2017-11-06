import { combineReducers } from 'redux';
import TasksReducer from './tasks-reducer.js';
import SelectedTaskReducer from './selected-task-reducer';
import TasksAreUpdatedReducer from './tasks-updated-reducer';
import ModalReducer from './modal-reducer';

const rootReducer = combineReducers({
  tasks: TasksReducer,
  selectedTask: SelectedTaskReducer,
  tasksAreUpdated: TasksAreUpdatedReducer,
  modal: ModalReducer
});

export default rootReducer;
