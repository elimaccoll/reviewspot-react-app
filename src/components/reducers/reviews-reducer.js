import {
  CREATE_REVIEW,
  LIKE_REVIEW_FROM_ALBUM,
  DELETE_REVIEW,
  FIND_POPULAR_REVIEWS,
  FIND_ALBUM_REVIEWS,
  FIND_USER_REVIEWS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  FIND_REVIEW,
  FIND_REVIEW_COMMENTS,
} from "../../actions/reviews-actions";

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case LIKE_REVIEW_FROM_ALBUM:
      // TODO: This is way more complex than it should be because the state
      // is a different shape when you like from the album page vs the review page
      // console.log(state);
      let updatedReview;
      // Check if user has already liked the post
      if (action.review.updatedReview.likedBy.includes(action.userId)) {
        const updatedLikedBy = action.review.updatedReview.likedBy.filter(
          (likedUserId) => likedUserId !== action.userId
        );
        updatedReview = {
          ...action.review.updatedReview,
          likedBy: updatedLikedBy,
        };
      } else {
        updatedReview = {
          ...action.review.updatedReview,
          likedBy: [...action.review.updatedReview.likedBy, action.userId],
        };
      }

      // console.log(updatedReview);
      // Update state
      const reviewsWithLike = state.reviews
        ? state.reviews.reviews.map((review) =>
            review._id === action.review.updatedReview._id
              ? updatedReview
              : review
          )
        : (state.review = updatedReview);
      console.log(reviewsWithLike);
      // state = state.reviews
      //   ? {
      //       ...state,
      //       reviews: reviewsWithLike,
      //     }
      //   : { ...state, review: reviewsWithLike };
      state = {
        ...state,
        reviews: { reviews: reviewsWithLike },
      };
      console.log(state);
      return state;
    case FIND_ALBUM_REVIEWS:
      state = {
        ...state,
        reviews: action.reviews,
      };
      return state;
    case CREATE_REVIEW:
      state = {
        ...state,
        reviews: [action.newReview, ...state.reviews],
      };
      return state;
    case FIND_REVIEW:
      // state = {
      //   ...state,
      //   reviews: [action.review],
      // };
      // return state;
      return action.review;
    case DELETE_REVIEW:
      const remainingReviews = state.reviews.filter(
        (review) => review._id !== action.reviewId
      );
      state = {
        ...state,
        reviews: remainingReviews,
      };
      return state;
    case FIND_USER_REVIEWS:
      state = {
        ...state,
        reviews: action.reviews,
      };
      return state;
    case FIND_POPULAR_REVIEWS:
      state = {
        ...state,
        popularReviews: action.reviews,
      };
      return state;
    default:
      return state;
  }
};
export default reviewsReducer;
