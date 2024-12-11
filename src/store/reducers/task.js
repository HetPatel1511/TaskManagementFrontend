import * as actionTypes from "../actionTypes";

const initialState = {
  task: {
    isLoading: false,
    data: null,
    error: null,
  },
  createTask: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_FETCH_TASK_DETAILS_WATCHER:
      return initialState;
    case actionTypes.FETCH_TASK_DETAILS_WATCHER:
      return {
        ...state,
        task: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case actionTypes.SET_TASK_DETAILS_SUCCESS:
      return {
        ...state,
        task: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case actionTypes.SET_TASK_DETAILS_FAILURE:
      return {
        ...state,
        task: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };

    // Create Task
    case actionTypes.RESET_CREATE_TASK_REQUEST:
      return {
        ...state,
        createTask: {
          isLoading: false,
          data: null,
          error: null,
        },
      };
    case actionTypes.CREATE_TASK_REQUEST:
      return {
        ...state,
        createTask: {
          ...state.createTask,
          isLoading: true,
          error: null,
        },
      };
    case actionTypes.CREATE_TASK_SUCCESS:
      return {
        ...state,
        createTask: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
        task: {
          ...state.task,
          data: [...(state.task.data || []), action.payload],
        },
      };
    case actionTypes.CREATE_TASK_FAILURE:
      return {
        ...state,
        createTask: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
