import { takeLatest, put, call } from "redux-saga/effects";
import { setSingleArticleDetailsSuccess, setSingleArticleDetailsFailure, setLoginSuccess } from "../actions";
import * as actionTypes from "../actionTypes";
import axios from "../../axios";
import { BASE_URL, API_URL } from "../../axios/config";

function fetchSingleArticleDetailsAPI(params) {
  return axios.request({
    method: "post",
    url: `${BASE_URL}${API_URL.GET_SINGLE_ARTICLE_DETAILS}`,
    data: params,
  });
}

export function* fetchSingleArticleDetailsActionEffect(action) {
  try {

    const { payload } = action;
    // if(payload) {
      // console.log("payload")
      // console.log(payload)
      const response = yield call(fetchSingleArticleDetailsAPI,payload);
      // console.log("fetchSingleArticleDetailsAPI")
      // console.log(response)
        // console.log('fetchSingleArticleDetailsAPI')
        // console.log(response.data)
        if (response.success) {
        yield put(setSingleArticleDetailsSuccess(response.data));
      } else {
        yield put(setSingleArticleDetailsFailure(response.data));
      }
    // }
  } catch (e) {
    if(e.unauthorized && e.unauthorized == true) {
      yield put(setLoginSuccess(null));
    } else {
      yield put(setSingleArticleDetailsFailure(e));
    }
  }
}

export function* fetchSingleArticleDetailsActionWatcher() {
  yield takeLatest(
    actionTypes.FETCH_SINGLE_ARTICLE_DETAILS_WATCHER,
    fetchSingleArticleDetailsActionEffect
  );
}
