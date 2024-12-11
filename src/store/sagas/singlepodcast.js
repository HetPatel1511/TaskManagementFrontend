import {takeLatest, put, call} from 'redux-saga/effects';
import {
    setSinglePodcastDetailsFailure,
    setSinglePodcastDetailsSuccess,
    setLoginSuccess
} from '../actions';
import * as actionTypes from '../actionTypes';
import axios from '../../axios';
import {BASE_URL, API_URL} from '../../axios/config';

function fetchSinglePodcastDetailAPI(params) {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}${API_URL.GET_SINGLE_PODCAST_DETAILS}&show_id=${params.show_id}`,
  });
}

export function* fetchSinglePodcastDetailsActionEffect(action) {
  try {
    const {payload} = action;
    const response = yield call(fetchSinglePodcastDetailAPI, payload);
    if(response.success) {;
        yield put(setSinglePodcastDetailsSuccess(response))
    } else {
        yield put(setSinglePodcastDetailsFailure(response))
    }
  } catch (e) {
    if(e.unauthorized && e.unauthorized == true) {
        yield put(setLoginSuccess(null));
      } else {
        yield put(setSinglePodcastDetailsFailure(e));
      }
  }
}

export function* fetchSinglePodcastDetailsActionWatcher() {
    yield takeLatest(
        actionTypes.FETCH_SINGLE_PODCAST_DETAILS_WATCHER,
        fetchSinglePodcastDetailsActionEffect
    )
}
