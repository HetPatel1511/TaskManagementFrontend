import { takeLatest, put, call } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import axios from "../../axios";
import { BASE_URL, API_URL } from "../../axios/config";
import {
  createProjectFailure,
  createProjectSuccess,
  setLoginSuccess,
  setProjectDetailsFailure,
  setProjectDetailsSuccess,
} from "../actions";

function fetchProjectDetailsAPI(params) {
  return axios.request({
    method: "get",
    url: `${BASE_URL}${API_URL.GET_PROJECT_DETAILS}`,
    data: params,
  });
}

export function* fetchProjectDetailsActionEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchProjectDetailsAPI, payload);
    if (response.success) {
      yield put(setProjectDetailsSuccess(response.data));
    } else {
      yield put(setProjectDetailsFailure(response.data));
    }
  } catch (e) {
    if (e.unauthorized) {
      yield put(setLoginSuccess(null));
    } else {
      yield put(setProjectDetailsFailure(e));
    }
  }
}

export function* fetchProjectDetailsActionWatcher() {
  yield takeLatest(
    actionTypes.FETCH_PROJECT_DETAILS_WATCHER,
    fetchProjectDetailsActionEffect
  );
}



// CREATE PROJECT
function createProjectAPI(data) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.CREATE_PROJECT}`,
    data,
  });
}

export function* createProjectActionEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(createProjectAPI, payload);

    if (response.success) {
      // Assuming 201 for successful creation
      yield put(createProjectSuccess(response.data));
      // Optional: refetch project list if needed
      // yield put({ type: actionTypes.FETCH_PROJECT_DETAILS_WATCHER });
    } else {
      console.log("response.message");
      console.log(response.message);
      
      yield put(createProjectFailure(Array.isArray(response.message) ? response.message?.[0] : response.message));
    }
  } catch (e) {
    if (e.unauthorized) {
      yield put(setLoginSuccess(null));
    } else {
      yield put(createProjectFailure(e));
    }
  }
}

export function* createProjectActionWatcher() {
  yield takeLatest(
    actionTypes.CREATE_PROJECT_REQUEST,
    createProjectActionEffect
  );
}
