import * as actionTypes from "../actionTypes";

const initialState = {
  project: {
    isLoading: false,
    data: null,
    error: null,
  },
  createProject: {
    isLoading: false,
    data: null,
    error: null,
  },
  dataset: [
    "ongoing_projects",
    "completed_projects",
    "upcoming_projects",
    "archived_projects",
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_FETCH_PROJECT_DETAILS_WATCHER:
      return initialState;
    case actionTypes.FETCH_PROJECT_DETAILS_WATCHER:
      return {
        ...state,
        project: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case actionTypes.SET_PROJECT_DETAILS_SUCCESS:
      return {
        ...state,
        project: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case actionTypes.SET_PROJECT_DETAILS_FAILURE:
      return {
        ...state,
        project: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };



    // CREATE PROJECT
    case actionTypes.RESET_CREATE_PROJECT_REQUEST:
      return {
        ...state,
        createProject: {
          isLoading: false,
          data: null,
          error: null,
        },
      };
    case actionTypes.CREATE_PROJECT_REQUEST:
      return {
        ...state,
        createProject: {
          ...state.createProject,
          isLoading: true,
          error: null,
        },
      };
    case actionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        createProject: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
        project: {
          ...state.project,
          data: [...(state.project.data || []), action.payload],
        },
      };
    case actionTypes.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        createProject: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
