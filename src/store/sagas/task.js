import { takeLatest, put, call } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import axios from "../../axios";
import { BASE_URL, API_URL } from "../../axios/config";
import {
  createTaskFailure,
  createTaskSuccess,
  setLoginSuccess,
  setTaskDetailsFailure,
  setTaskDetailsSuccess,
} from "../actions";

function fetchTaskDetailsAPI(params) {
  console.log(params);
  console.log(`${BASE_URL}${API_URL.GET_TASK_DETAILS}`);
  
  return axios.request({
    method: "GET",
    url: `${BASE_URL}${API_URL.GET_TASK_DETAILS}`,
    params: params,
  });
}

export function* fetchTaskDetailsActionEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchTaskDetailsAPI, payload);
    console.log("response");
    console.log(response);
    
    if (response.success) {
      yield put(setTaskDetailsSuccess(response.data));
    } else {
      yield put(setTaskDetailsFailure(response.message));
    }
  } catch (e) {
    if (e.unauthorized) {
      yield put(setLoginSuccess(null));
    } else {
      yield put(setTaskDetailsFailure(e));
    }
  }
}

export function* fetchTaskDetailsActionWatcher() {
  yield takeLatest(actionTypes.FETCH_TASK_DETAILS_WATCHER, fetchTaskDetailsActionEffect);
}

// Create Task
function createTaskAPI(data) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.CREATE_TASK}`,
    data,
  });
}

export function* createTaskActionEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(createTaskAPI, payload);

    if (response.success) {
      yield put(createTaskSuccess(response.data));
    } else {
      yield put(createTaskFailure(response.message));
    }
  } catch (e) {
    if (e.unauthorized) {
      yield put(setLoginSuccess(null));
    } else {
      yield put(createTaskFailure(e));
    }
  }
}

export function* createTaskActionWatcher() {
  yield takeLatest(actionTypes.CREATE_TASK_REQUEST, createTaskActionEffect);
}
