import {
  CREATE_REVIEW,
  LIKE_REVIEW,
  DELETE_REVIEW,
  FIND_POPULAR_REVIEWS,
  FIND_ALBUM_REVIEWS,
  FIND_USER_REVIEWS,
  FIND_REVIEW,
  EDIT_REVIEW,
} from "../../actions/reviews-actions";

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_REVIEW:
      console.log(action);
      const editedReview = action.updatedReview.updatedReview;
      const withEditedReview = state.reviews.reviews.map((review) =>
        review._id === editedReview._id ? editedReview : review
      );
      // Update state
      state = {
        ...state,
        reviews: { reviews: withEditedReview },
      };
      return state;
    case CREATE_REVIEW:
      state = {
        ...state,
        reviews: { reviews: [action.newReview, ...state.reviews.reviews] },
      };
      return state;
    case DELETE_REVIEW:
      const remainingReviews = state.reviews.reviews.filter(
        (review) => review._id !== action.reviewId
      );
      state = {
        ...state,
        reviews: { reviews: remainingReviews },
      };
      return state;
    case LIKE_REVIEW:
      let likedReview = action.review.updatedReview;
      const userId = action.userId;
      // Check if user liked review already and update the liked review
      if (likedReview.likedBy.includes(userId)) {
        const updatedLikedBy = likedReview.likedBy.filter(
          (likedUserId) => likedUserId !== userId
        );
        likedReview.likedBy = updatedLikedBy;
      } else {
        likedReview.likedBy.push(userId);
      }
      // Get updated list of reviews
      const updatedReviews = state.reviews.reviews.map((review) =>
        review._id === likedReview._id ? likedReview : review
      );
      // Update state
      state = {
        ...state,
        reviews: { ...state.reviews, reviews: updatedReviews },
      };
      return state;
    case FIND_USER_REVIEWS:
      state = {
        ...state,
        reviews: action.reviews,
      };
      return state;
    case FIND_ALBUM_REVIEWS:
      state = {
        reviews: action.reviews,
      };
      return state;
    case FIND_REVIEW:
      state = {
        reviews: {
          albumData: action.review.albumData,
          reviews: [action.review.review],
        },
      };
      return state;
    case FIND_POPULAR_REVIEWS:
      console.log(action.reviews);
      state = {
        reviews: { reviews: action.reviews },
      };
      return state;
    default:
      return state;
  }
};
export default reviewsReducer;
