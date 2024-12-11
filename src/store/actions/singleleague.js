import * as actionTypes from "../actionTypes"

export const resetFetchSingleLeagueDetailsWatcher = (payload) => ({
    type: actionTypes.FETCH_SINGLE_LEAGUE_DETAILS_WATCHER,
    payload,
  });
  
  export const fetchSingleLeagueDetailsWatcher = (payload) => ({
    type: actionTypes.FETCH_SINGLE_LEAGUE_DETAILS_WATCHER,
    payload,
  });
  
  export const setSingleLeagueDetailsSuccess = (payload) => ({
    type: actionTypes.SET_SINGLE_LEAGUE_DETAILS_SUCCESS,
    payload,
  });
  
  export const setSingleLeagueDetailsFailure = (payload) => ({
    type: actionTypes.SET_SINGLE_LEAGUE_DETAILS_SUCCESS,
    payload,
  });