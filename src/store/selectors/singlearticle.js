import { createSelector } from "reselect";

const singleArticleSelector = (state) => state.SingleArticle;
export const getSingleArticleDetailsIsLoading = createSelector(
  singleArticleSelector,
  (singleArticle) => singleArticle.singleArticle.isLoading
);

export const getSingleArticleDetails = createSelector(
  singleArticleSelector,
  (singleArticle) => singleArticle.singleArticle.data
);

export const getSingleArticleError = createSelector(
  singleArticleSelector,
  (singleArticle) => singleArticle.singleArticle.error
);