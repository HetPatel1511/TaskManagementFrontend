import * as actionTypes from "../actionTypes";

const initialState = {
  feed: {
    isLoading: false,
    data: null,
    error: null,
  },
  dataset : [
    'live_and_upcoming_show',
    'trending_videos',
    'sportsgrid_shows',
    'leagues',
    'podcasts',
    // 'picks_videos',
  ]
}; 

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_FETCH_FEED_DETAILS_WATCHER:
      return initialState;
    case actionTypes.FETCH_FEED_DETAILS_WATCHER:
      return {
        ...state,
        feed: {
          isLoading: true,
          data: null,
          error: null
        },
      };
    case actionTypes.SET_FEED_DETAILS_SUCCESS:
      return {
        ...state,
        feed: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case actionTypes.SET_FEED_DETAILS_FAILURE:
      return {
        ...state,
        feed: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
