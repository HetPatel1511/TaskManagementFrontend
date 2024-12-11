import { createSelector } from "reselect";

const taskSelector = (state) => state.Task;

export const getTaskDetailsIsLoading = createSelector(
  taskSelector,
  (task) => task.task.isLoading
);

export const getTaskDetails = createSelector(
  taskSelector,
  (task) => task.task.data
);

export const getTaskError = createSelector(
  taskSelector,
  (task) => task.task.error
);

// Create Task
export const getCreateTaskIsLoading = createSelector(
  taskSelector,
  (task) => task.createTask.isLoading
);

export const getCreateTaskDetails = createSelector(
  taskSelector,
  (task) => task.createTask.data
);

export const getCreateTaskError = createSelector(
  taskSelector,
  (task) => task.createTask.error
);
