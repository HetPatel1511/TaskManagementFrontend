import * as actionTypes from '../actionTypes';

export const resetFetchSingleShowDetailsWatcher = (payload) => ({
  type: actionTypes.FETCH_SINGLE_SHOW_DETAILS_WATCHER,
  payload,
});

export const fetchSingleShowDetailsWatcher = (payload) => ({
  type: actionTypes.FETCH_SINGLE_SHOW_DETAILS_WATCHER,
  payload,
});

export const setSingleShowDetailsSuccess = (payload) => ({
  type: actionTypes.SET_SINGLE_SHOW_DETAILS_SUCCESS,
  payload,
});

export const setSingleShowDetailsFailure = (payload) => ({
  type: actionTypes.SET_SINGLE_SHOW_DETAILS_SUCCESS,
  payload,
});
