import * as actionTypes from '../actionTypes';

const initialState = {
  user: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_FETCH_USER_DETAILS_WATCHER:
      return initialState;
    case actionTypes.FETCH_USER_DETAILS_WATCHER:
      return {
        ...state,
        user: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case actionTypes.SET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };

    case actionTypes.SET_USER_DETAILS_FAILURE:
      return {
        ...state,
        user: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
