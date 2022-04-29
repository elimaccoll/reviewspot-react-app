import reviews from "../data/reviews.json";
import {
  CREATE_REVIEW,
  LIKE_REVIEW,
  DELETE_REVIEW,
  FIND_HOME_REVIEWS,
  FIND_ALBUM_REVIEWS,
  FIND_USER_REVIEWS,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from "../../actions/reviews-actions";

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALBUM_REVIEWS:
      return action.reviews;
    default:
      return reviews;
  }
};
export default reviewsReducer;
