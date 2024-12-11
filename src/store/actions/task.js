import * as actionTypes from "../actionTypes";

// Fetch Task Details
export const resetFetchTaskDetailsWatcher = (payload) => ({
  type: actionTypes.RESET_FETCH_TASK_DETAILS_WATCHER,
  payload,
});

export const fetchTaskDetailsWatcher = (payload) => ({
  type: actionTypes.FETCH_TASK_DETAILS_WATCHER,
  payload,
});

export const setTaskDetailsSuccess = (payload) => ({
  type: actionTypes.SET_TASK_DETAILS_SUCCESS,
  payload,
});

export const setTaskDetailsFailure = (payload) => ({
  type: actionTypes.SET_TASK_DETAILS_FAILURE,
  payload,
});

// Create Task
export const resetCreateTaskRequest = (payload) => ({
  type: actionTypes.RESET_CREATE_TASK_REQUEST,
  payload,
});

export const createTaskRequest = (payload) => ({
  type: actionTypes.CREATE_TASK_REQUEST,
  payload,
});

export const createTaskSuccess = (task) => ({
  type: actionTypes.CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error) => ({
  type: actionTypes.CREATE_TASK_FAILURE,
  payload: error,
});
