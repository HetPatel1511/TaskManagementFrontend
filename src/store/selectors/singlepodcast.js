import { createSelector } from "reselect"

const singlePodcastSelector = (state) => state.SinglePodcast;
export const getSinglePodcastDetailsIsLoading = createSelector(
  singlePodcastSelector,
  (singlePodcast) => singlePodcast.singlePodcast.isLoading
);

export const getSinglePodcastDetails = createSelector(
  singlePodcastSelector,
  (singlePodcast) => singlePodcast.singlePodcast.data
);

export const getSinglePodcastError = createSelector(
  singlePodcastSelector,
  (singlePodcast) => singlePodcast.singlePodcast.error
);
