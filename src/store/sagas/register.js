import { takeLatest, put, call } from "redux-saga/effects";
import { updateRegistrationDetailsSuccess, updateRegistrationDetailsFailure,
resetPasswordDetailsSuccess, resetPasswordDetailsFailure,
  setLoginSuccess,
  setLoginFailure,
  setUserDetailsSuccess,
  setUserDetailsFailure } from "../actions";
import * as actionTypes from "../actionTypes";
import axios from "../../axios";
import { BASE_URL, API_URL } from "../../axios/config";

function updateRegistrationDetailsAPI(params) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.REGISTRATION}`,
    data: params,

  });
}

export function* updateRegistrationDetailsActionEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(updateRegistrationDetailsAPI, payload);
    if (response.success) {
      yield put(updateRegistrationDetailsSuccess(response));
      yield put(setUserDetailsSuccess(response.data));
      yield put(setLoginSuccess(response));

    } else {
      yield put(updateRegistrationDetailsFailure(response));
    }
  } catch (e) {
    yield put(updateRegistrationDetailsFailure(e));
  }
}

export function* updateRegistrationDetailsActionWatcher() {
  yield takeLatest(
    actionTypes.UPDATE_REGISTRATION_DETAILS_WATCHER,
    updateRegistrationDetailsActionEffect
  );
}

function resetPasswordDetailsAPI(params) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.RESET_PASSWORD}`,
    data: params,

  });
}

export function* resetPasswordDetailsActionEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(resetPasswordDetailsAPI, payload);
    if (response.success) {
      yield put(resetPasswordDetailsSuccess(response));
    } else {
      yield put(resetPasswordDetailsFailure(response));
    }
  } catch (e) {
    yield put(resetPasswordDetailsFailure(e));
  }
}

export function* resetPasswordDetailsActionWatcher() {
  yield takeLatest(
    actionTypes.RESET_PASSWORD_DETAILS_WATCHER,
    resetPasswordDetailsActionEffect
  );
}
