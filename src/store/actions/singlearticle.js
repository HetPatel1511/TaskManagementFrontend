import * as actionTypes from "../actionTypes";

export const resetfetchSingleArticleDetailsWatcher = (payload) => ({
  type: actionTypes.RESET_FETCH_SINGLE_ARTICLE_DETAILS_WATCHER,
  payload,
});
export const fetchSingleArticleDetailsWatcher = (payload) => ({
  type: actionTypes.FETCH_SINGLE_ARTICLE_DETAILS_WATCHER,
  payload,
});

export const setSingleArticleDetailsSuccess = (payload) => ({
  type: actionTypes.SET_SINGLE_ARTICLE_DETAILS_SUCCESS,
  payload,
});

export const setSingleArticleDetailsFailure = (payload) => ({
  type: actionTypes.SET_SINGLE_ARTICLE_DETAILS_FAILURE,
  payload,
});