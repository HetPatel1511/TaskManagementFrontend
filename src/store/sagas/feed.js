import {takeLatest, put, call} from 'redux-saga/effects';
import {
  setFeedDetailsSuccess,
  setFeedDetailsFailure,
  setLoginSuccess,
} from '../actions';
import * as actionTypes from '../actionTypes';
import axios from '../../axios';
import {BASE_URL, API_URL} from '../../axios/config';

function fetchFeedDetailsAPI(params) {
  return axios.request({
    method: 'post',
    url: `${BASE_URL}${API_URL.GET_FEED_DETAILS}`,
    data: params,
  });
}

export function* fetchFeedDetailsActionEffect(action) {
  try {
    const {payload} = action;
    const response = yield call(fetchFeedDetailsAPI, payload);
    if (response.success) {
      yield put(setFeedDetailsSuccess(response.data));
    } else {
      yield put(setFeedDetailsFailure(response.data));
    }
    // }
  } catch (e) {
    if (e.unauthorized && e.unauthorized == true) {
      yield put(setLoginSuccess(null));
    } else {
      yield put(setFeedDetailsFailure(e));
    }
  }
}

export function* fetchFeedDetailsActionWatcher() {
  yield takeLatest(
    actionTypes.FETCH_FEED_DETAILS_WATCHER,
    fetchFeedDetailsActionEffect,
  );
}
