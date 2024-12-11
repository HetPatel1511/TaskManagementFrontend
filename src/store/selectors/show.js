import { createSelector } from "reselect"

const showSelector = (state) => state.Show;
export const getSingleShowDetailsIsLoading = createSelector(
  showSelector,
  (singleShow) => singleShow.singleShow.isLoading
);

export const getSingleShowDetails = createSelector(
  showSelector,
  (singleShow) => singleShow.singleShow.data
);

export const getSingleShowError = createSelector(
  showSelector,
  (singleShow) => singleShow.singleShow.error
);
