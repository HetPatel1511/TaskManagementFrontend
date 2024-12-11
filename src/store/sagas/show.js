import {takeLatest, put, call} from 'redux-saga/effects';
import {
  setSingleShowDetailsSuccess,
  setSingleShowDetailsFailure,
  setLoginSuccess,
} from '../actions';
import * as actionTypes from '../actionTypes';
import axios from '../../axios';
import {BASE_URL, API_URL} from '../../axios/config';

function fetchSingleShowDetailAPI(params) {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}${API_URL.GET_SINGLE_SHOW_DETAILS}&ep_show_id=${params.id}`,
  });
}

export function* fetchSingleShowDetailsActionEffect(action) {
  try {
    const {payload} = action;
    const response = yield call(fetchSingleShowDetailAPI, payload);
    if(response.success) {
        yield put(setSingleShowDetailsSuccess(response))
    } else {
        yield put(setSingleShowDetailsFailure(response))
    }
  } catch (e) {
    if(e.unauthorized && e.unauthorized == true) {
        yield put(setLoginSuccess(null));
      } else {
        yield put(setSingleShowDetailsFailure(e));
      }
  }
}

export function* fetchSingleShowDetailsActionWatcher() {
    yield takeLatest(
        actionTypes.FETCH_SINGLE_SHOW_DETAILS_WATCHER,
        fetchSingleShowDetailsActionEffect
    )
}
