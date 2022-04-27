import reviews from "../data/reviews.json";

const reviewsReducer = (state = reviews, action) => {
  switch (action.type) {
    case "create-review":
      console.log(action.review);
      const newReview = {
        review: action.review,
        rating: action.rating,
        replies: [],
        likes: 0,
        _id: reviews.length, // new Date().getTime() + "",
        username: "get from user",
        profile_pic: `https://picsum.photos/200/300?random=${
          Math.random() * 1000 + 5
        }`,
      };
      reviews.push(newReview);
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
    case "reply-to-review":
      return;
    default:
      return reviews;
  }
};
export default reviewsReducer;
