import * as actionTypes from "../actionTypes";

export const resetFetchProjectDetailsWatcher = (payload) => ({
  type: actionTypes.RESET_FETCH_PROJECT_DETAILS_WATCHER,
  payload,
});

export const fetchProjectDetailsWatcher = (payload) => ({
  type: actionTypes.FETCH_PROJECT_DETAILS_WATCHER,
  payload,
});

export const setProjectDetailsSuccess = (payload) => ({
  type: actionTypes.SET_PROJECT_DETAILS_SUCCESS,
  payload,
});

export const setProjectDetailsFailure = (payload) => ({
  type: actionTypes.SET_PROJECT_DETAILS_FAILURE,
  payload,
});



// CREATE PROJECT
export const resetCreateProjectRequest = (payload) => ({
  type: actionTypes.RESET_CREATE_PROJECT_REQUEST,
  payload,
});

export const createProjectRequest = (payload) => ({
  type: actionTypes.CREATE_PROJECT_REQUEST,
  payload,
});

export const createProjectSuccess = (project) => ({
  type: actionTypes.CREATE_PROJECT_SUCCESS,
  payload: project,
});

export const createProjectFailure = (error) => ({
  type: actionTypes.CREATE_PROJECT_FAILURE,
  payload: error,
});
