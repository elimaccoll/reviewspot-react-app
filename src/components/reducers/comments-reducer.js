import {
  FIND_REVIEW_COMMENTS,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from "../../actions/reviews-actions";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_REVIEW_COMMENTS:
      return action.comments;
    case CREATE_COMMENT:
      state = {
        ...state,
        comments: [action.newComment.newComment, ...state.comments],
        total: state.total + 1,
      };
      return state;
    case DELETE_COMMENT:
      const remainingComments = state.comments.filter(
        (comment) => comment._id !== action.commentId
      );
      state = {
        ...state,
        comments: remainingComments,
      };
      return state;
    default:
      return state;
  }
};
export default commentsReducer;
