import * as actionTypes from "../actionTypes";

export const resetfetchFeedDetailsWatcher = (payload) => ({
  type: actionTypes.RESET_FETCH_FEED_DETAILS_WATCHER,
  payload,
});
export const fetchFeedDetailsWatcher = (payload) => ({
  type: actionTypes.FETCH_FEED_DETAILS_WATCHER,
  payload,
});

export const setFeedDetailsSuccess = (payload) => ({
  type: actionTypes.SET_FEED_DETAILS_SUCCESS,
  payload,
});

export const setFeedDetailsFailure = (payload) => ({
  type: actionTypes.SET_FEED_DETAILS_FAILURE,
  payload,
});