import reviews from "../data/reviews.json";

// TODO: Update with actions files
const reviewsReducer = (state = reviews, action) => {
  switch (action.type) {
    case "create-review":
      // TODO: temporary way of incrementing local reviews -- testing
      const newId = (parseInt(reviews[reviews.length - 1]._id) + 1).toString();
      const newReview = {
        review: action.review,
        rating: action.rating,
        comments: [],
        likes: 0,
        _id: newId,
        username: "get from user",
        profile_pic: `https://picsum.photos/200/300?random=${
          Math.random() * 1000 + 5
        }`,
      };
      // reviews.push(newReview);
      return [newReview, ...state];
    case "delete-review":
      return state.filter((review) => review._id !== action.review._id);
    case "like-review":
      return state.map((review) => {
        if (review._id === action.review._id) {
          review.likes++;
        }
        return review;
      });
    case "comment-on-review":
      return state.map((review) => {
        if (review._id === action.reviewId) {
          review.comments.push(action.comment);
        }
        return review;
      });
    case "delete-comment":
      // TODO: No way to identify a comment
      return;
    default:
      return reviews;
  }
};
export default reviewsReducer;
