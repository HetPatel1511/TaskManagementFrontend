import {takeLatest, put, call} from 'redux-saga/effects';
import {
    setSingleLeagueDetailsFailure,
    setSingleLeagueDetailsSuccess,
    setLoginSuccess
} from '../actions';
import * as actionTypes from '../actionTypes';
import axios from '../../axios';
import {BASE_URL, API_URL} from '../../axios/config';

function fetchSingleLeagueDetailAPI(params) {
  return axios.request({
    method: 'get',
    url: `${BASE_URL}${API_URL.GET_SINGLE_LEAGUE_DETAILS}&sport=${params.sport}`,
  });
}

export function* fetchSingleLeagueDetailsActionEffect(action) {
  try {
    const {payload} = action;
    const response = yield call(fetchSingleLeagueDetailAPI, payload);
    if(response.success) {;
        yield put(setSingleLeagueDetailsSuccess(response))
    } else {
        yield put(setSingleLeagueDetailsFailure(response))
    }
  } catch (e) {
    if(e.unauthorized && e.unauthorized == true) {
        yield put(setLoginSuccess(null));
      } else {
        yield put(setSingleLeagueDetailsFailure(e));
      }
  }
}

export function* fetchSingleLeagueDetailsActionWatcher() {
    yield takeLatest(
        actionTypes.FETCH_SINGLE_LEAGUE_DETAILS_WATCHER,
        fetchSingleLeagueDetailsActionEffect
    )
}
