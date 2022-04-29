import { BAN_USER, DELETE_USER, EDIT_BIO } from "../../actions/user-actions";

// TODO: remove - for testing
const user = {
  bio: "",
};

// TODO: Idk if this is how we would do this for anything besides bio
const userReducer = (state = user, action) => {
  switch (action.type) {
    case "EDIT_BIO":
      state.bio = action.bio;
      return state;
    case DELETE_USER:
      return;
    case BAN_USER:
      return;
    default:
      return state;
  }
};
export default userReducer;
