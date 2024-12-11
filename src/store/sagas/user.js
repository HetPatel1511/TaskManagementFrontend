import {takeLatest, put, call} from 'redux-saga/effects';
import {setUserDetailsSuccess, setUserDetailsFailure} from '../actions';
import * as actionTypes from '../actionTypes';
import axios from '../../axios';
import {BASE_URL, API_URL} from '../../axios/config';

function fetchUserDetailsAPI(params) {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}${API_URL.GET_USER_DETAILS}?access_token=${params.accessToken}&fields=first_name,id,company_id,role,employer_subscription_tier`,
  });
}

export function* fetchUserDetailsActionEffect(action) {
  try {
    const {payload} = action;
    const response = yield call(fetchUserDetailsAPI, payload);
    yield put(setUserDetailsSuccess(response.data));
  } catch (e) {
    yield put(setUserDetailsFailure());
  }
}

export function* fetchUserDetailsActionWatcher() {
  yield takeLatest(
    actionTypes.FETCH_USER_DETAILS_WATCHER,
    fetchUserDetailsActionEffect,
  );
}
