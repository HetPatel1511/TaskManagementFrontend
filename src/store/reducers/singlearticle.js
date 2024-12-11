import * as actionTypes from "../actionTypes";

const initialState = {
  singleArticle: {
    isLoading: false,
    data: null,
    error: null,
  },
  selectedArticle: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_FETCH_SINGLE_ARTICLE_DETAILS_WATCHER:
      return initialState;
    case actionTypes.FETCH_SINGLE_ARTICLE_DETAILS_WATCHER:
      return {
        ...state,
        singleArticle: {
          isLoading: true,
          data: null,
          error: null
        },
      };
    case actionTypes.SET_SINGLE_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        singleArticle: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case actionTypes.SET_SINGLE_ARTICLE_DETAILS_FAILURE:
      return {
        ...state,
        singleArticle: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
