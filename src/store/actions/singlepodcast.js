import * as actionTypes from "../actionTypes"

export const resetFetchSinglePodcastDetailsWatcher = (payload) => ({
    type: actionTypes.RESET_FETCH_SINGLE_PODCAST_DETAILS_WATCHER,
    payload,
  });
  
  export const fetchSinglePodcastDetailsWatcher = (payload) => ({
    type: actionTypes.FETCH_SINGLE_PODCAST_DETAILS_WATCHER,
    payload,
  });
  
  export const setSinglePodcastDetailsSuccess = (payload) => ({
    type: actionTypes.SET_SINGLE_PODCAST_DETAILS_SUCCESS,
    payload,
  });
  
  export const setSinglePodcastDetailsFailure = (payload) => ({
    type: actionTypes.SET_SINGLE_PODCAST_DETAILS_FAILURE,
    payload,
  });