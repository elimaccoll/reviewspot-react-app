import * as service from "../services/reviews-services";

export const CREATE_REVIEW = "CREATE_REVIEW";
export const LIKE_REVIEW_FROM_ALBUM = "LIKE_REVIEW_FROM_ALBUM";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const FIND_POPULAR_REVIEWS = "FIND_HOME_REVIEW";
export const FIND_ALBUM_REVIEWS = "FIND_ALBUM_REVIEWS";
export const FIND_USER_REVIEWS = "FIND_USER_REVIEWS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const FIND_REVIEW = "FIND_REVIEW";
export const FIND_REVIEW_COMMENTS = "FIND_REVIEW_COMMENTS";
export const LIKE_REVIEW = "LIKE_REVIEW";

export const createReview = async (dispatch, review, rating, albumId) => {
  const newReview = await service.createReview(review, rating, albumId);
  dispatch({
    type: CREATE_REVIEW,
    newReview,
  });
};

export const findReviewComments = async (dispatch, reviewId, albumID) => {
  const comments = await service.findReviewComments(reviewId, albumID);
  dispatch({
    type: FIND_REVIEW_COMMENTS,
    comments,
  });
};

export const findReviewById = async (dispatch, reviewId, albumID) => {
  const review = await service.findReviewById(reviewId, albumID);
  dispatch({
    type: FIND_REVIEW,
    review,
  });
};

export const likeReview = async (dispatch, reviewId, albumId, userId) => {
  const review = await service.likeReview(reviewId, albumId);
  // TODO: Check status
  dispatch({
    type: LIKE_REVIEW,
    review,
    userId,
  });
};

export const deleteReview = async (dispatch, reviewId, albumId) => {
  const status = await service.deleteReview(reviewId, albumId);
  // TODO: check status
  dispatch({
    type: DELETE_REVIEW,
    reviewId,
  });
};

export const findPopularReviews = async (dispatch) => {
  const reviews = await service.findPopularReviews();
  dispatch({
    type: FIND_POPULAR_REVIEWS,
    reviews,
  });
};

export const findAlbumReviews = async (dispatch, albumId) => {
  const reviews = await service.findAlbumReviews(albumId);
  dispatch({
    type: FIND_ALBUM_REVIEWS,
    reviews,
  });
};

export const findUserReviews = async (dispatch, userId) => {
  const reviews = await service.findUserReviews(userId);
  dispatch({
    type: FIND_USER_REVIEWS,
    reviews,
  });
};

// TODO: Not sure about comment operations
export const createCommentOnReview = async (
  dispatch,
  reviewId,
  albumdId,
  comment
) => {
  const newComment = await service.createCommentOnReview(
    reviewId,
    albumdId,
    comment
  );
  dispatch({
    type: CREATE_COMMENT,
    newComment,
  });
};

export const deleteCommentOnReview = async (
  dispatch,
  reviewId,
  albumId,
  commentId
) => {
  const status = await service.deleteCommentOnReview(
    reviewId,
    albumId,
    commentId
  );
  // TODO: check status
  dispatch({
    type: DELETE_COMMENT,
    commentId,
  });
};
