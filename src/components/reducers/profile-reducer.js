import { GET_USER } from "../../actions/user-actions";

const profileReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
};
export default profileReducer;
