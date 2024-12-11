import {createSelector} from 'reselect';

const userSelector = state => state.User;

export const getUserDetailsIsLoading = createSelector(
  userSelector,
  user => user.user.isLoading,
);

export const getUserDetails = createSelector(
  userSelector,
  user => user.user.data,
);
