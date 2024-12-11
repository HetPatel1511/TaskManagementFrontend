import { createSelector } from "reselect";

const feedSelector = (state) => state.Feed;
export const getFeedDetailsIsLoading = createSelector(
  feedSelector,
  (feed) => feed.feed.isLoading
);

export const getFeedDetails = createSelector(
  feedSelector,
  (feed) => feed.feed.data
);

export const getFeedError = createSelector(
  feedSelector,
  (feed) => feed.feed.error
);
export const getFeedKeyDataset = createSelector(
  feedSelector,
  (feed) => feed.dataset
);