import { createSelector } from "reselect";

const projectSelector = (state) => state.Project;

export const getProjectDetailsIsLoading = createSelector(
  projectSelector,
  (project) => project.project.isLoading
);

export const getProjectDetails = createSelector(
  projectSelector,
  (project) => project.project.data
);

export const getProjectError = createSelector(
  projectSelector,
  (project) => project.project.error
);


// CREATE PROJECT
export const getCreateProjectIsLoading = createSelector(
  projectSelector,
  (project) => project.createProject.isLoading
);

export const getCreateProjectDetails = createSelector(
  projectSelector,
  (project) => project.createProject.data
);

export const getCreateProjectError = createSelector(
  projectSelector,
  (project) => project.createProject.error
);
