// TODO: Idk if this is how we would do this
const userReducer = (state, action) => {
  switch (action.type) {
    case "edit-bio":
      return;
    case "delete-account":
      return;
    case "ban-user":
      return;
    default:
      return reviews;
  }
};
export default reviewsReducer;
