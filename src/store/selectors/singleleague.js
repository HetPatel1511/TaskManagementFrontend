import { createSelector } from "reselect"

const singleLeagueSelector = (state) => state.SingleLeague;
export const getSingleLeagueDetailsIsLoading = createSelector(
  singleLeagueSelector,
  (singleLeague) => singleLeague.singleLeague.isLoading
);

export const getSingleLeagueDetails = createSelector(
  singleLeagueSelector,
  (singleLeague) => singleLeague.singleLeague.data
);

export const getSingleLeagueError = createSelector(
  singleLeagueSelector,
  (singleLeague) => singleLeague.singleLeague.error
);
