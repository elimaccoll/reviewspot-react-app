import * as service from "../services/reviews-service";

export const CREATE_REVIEW = "CREATE_REVIEW";
export const LIKE_REVIEW = "LIKE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const FIND_HOME_REVIEWS = "FIND_HOME_REVIEW";
export const FIND_ALBUM_REVIEWS = "FIND_ALBUM_REVIEWS";
export const FIND_USER_REVIEWS = "FIND_USER_REVIEWS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const createReview = async (dispatch, review) => {
  // TODO: Fill in with all default values
  review = {
    likes: 0,
    comments: [],
    ...review,
  };
  const newReview = await service.createReview(review);
  dispatch({
    type: CREATE_REVIEW,
    newReview,
  });
};

export const likeReview = async (dispatch, review) => {
  const like_inc = 1;
  // Move this to backend?
  if (review.liked) like_inc = -1;
  review = { ...review, liked: !review.liked, likes: review.likes + like_inc };
  const status = await service.likeReview(review);
  // TODO: Check status
  dispatch({
    type: LIKE_REVIEW,
    review,
  });
};

export const deleteReview = async (dispatch, review) => {
  const status = await service.deleteReview(review);
  // TODO: check status
  dispatch({
    type: DELETE_REVIEW,
    review,
  });
};

export const findHomeReviews = async (dispatch) => {
  const reviews = await service.findHomeReviews();
  dispatch({
    type: FIND_HOME_REVIEWS,
    reviews,
  });
};

export const findAlbumReviews = async (dispatch) => {
  const reviews = await service.findAlbumReviews();
  dispatch({
    type: FIND_ALBUM_REVIEWS,
    reviews,
  });
};

export const findUserReviews = async (dispatch) => {
  const reviews = await service.findUserReviews();
  dispatch({
    type: FIND_USER_REVIEWS,
    reviews,
  });
};

// TODO: Not sure about comment operations
export const createCommentOnReview = async (dispatch, review, comment) => {
  // TODO: Fill in with all default values
  comment = {
    ...comment,
  };
  const newComment = await service.createCommentOnReview(review, comment);
  dispatch({
    type: CREATE_COMMENT,
    review,
    newComment,
  });
};

export const deleteCommentOnReview = async (dispatch, review, comment) => {
  const status = await service.deleteCommentOnReview(review, comment);
  // TODO: check status
  dispatch({
    type: DELETE_COMMENT,
    review,
    comment,
  });
};
