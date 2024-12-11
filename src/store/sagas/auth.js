import { takeLatest, put, call } from "redux-saga/effects";
import {
  setLoginSuccess,
  setLoginFailure,
  fetchUserDetailsWatcher,
  setUserDetailsSuccess,
  setUserDetailsFailure,
  setSocialLoginSuccess,
  setSocialLoginFailure,
  setDeleteAccountSuccess,
  setDeleteAccountFailure,
} from "../actions";
import * as actionTypes from "../actionTypes";
import axios from "../../axios";
import { BASE_URL, API_URL } from "../../axios/config";

function deviceIdAPI(params) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.SEND_USER_DEVICE_ID}`,
    data: params,
  });
}

export function* userDeviceIdEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(deviceIdAPI, payload);
  } catch (e) {
    console.log("Error while sending device ID :- ",e);
  }
}

export function* sendUserDeviceID() {
  yield takeLatest(actionTypes.SEND_USER_DEVICE_ID, userDeviceIdEffect);
}
function loginAPI(params) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.LOGIN}`,
    data: params,
  });
}
export function* loginEffect(action) {
  try {
    const { payload } = action;
    const response = yield call(loginAPI, payload);
    console.log("response");
    console.log(response);
    
    try {
      // const userDetails = yield call(fetchUserDetailsAPI, {
      //   accessToken: response.data.token,
      // });
      if(response.success) {
        yield put(setUserDetailsSuccess(response.data));
      } else {
        yield put(setUserDetailsFailure(response));
      }
    } catch (error) {
      yield put(setUserDetailsFailure(error));
    } finally {
      if(response.success) {
        yield put(setLoginSuccess(response.data));
      } else {
        yield put(setLoginFailure(response));
      }
    }
  } catch (e) {
    yield put(setLoginFailure(e));
  }
}

export function* loginWatcher() {
  yield takeLatest(actionTypes.LOGIN_WATCHER, loginEffect);
}

function socialLoginAPI(params) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.SOCIAL_LOGIN}`,
    data: params,
  });
}
export function* socialLoginEffect(action) {
  try {
    const { payload } = action;
    try {
      const response = yield call(socialLoginAPI, payload);
      if (response.success) {
        yield put(setSocialLoginSuccess(response));
        yield put(setUserDetailsSuccess(response.token));
      } else {
        yield put(setSocialLoginFailure(response));
      }
    } catch (error) {
      yield put(setSocialLoginFailure(error));
    }
  } catch (e) {
    yield put(setSocialLoginFailure(e));
  }
}

export function* socialLoginWatcher() {
  yield takeLatest(actionTypes.SOCIAL_LOGIN_WATCHER, socialLoginEffect);
}
