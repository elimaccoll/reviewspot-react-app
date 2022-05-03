import {
  DELETE_USER,
  EDIT_BIO,
  LOGIN,
  LOGOUT,
  REGISTER,
  IS_LOGGED_IN,
} from "../../actions/user-actions";

const userReducer = (
  state = {
    bio: "",
    banned: false,
    loggedIn: false,
    role: "",
    username: "",
    _id: "",
  },
  action
) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      const isLoggedInInfo = action.response;
      if (!isLoggedInInfo.loggedIn) {
        state = {
          bio: "",
          banned: false,
          loggedIn: false,
          role: "",
          username: "",
          _id: "",
        };
      } else {
        state = {
          ...state,
          loggedIn: isLoggedInInfo.loggedIn,
          role: isLoggedInInfo.userInfo.role,
          username: isLoggedInInfo.userInfo.username,
          _id: isLoggedInInfo.userInfo._id,
        };
      }
      return state;
    case LOGIN:
      const loginInfo = action.response;
      const loginState = {
        ...state,
        banned: false,
        loggedIn: true,
        role: loginInfo.role,
        username: loginInfo.username,
        _id: loginInfo._id,
      };
      return loginState;
    case REGISTER:
      const registerInfo = action.response;
      const registerState = {
        ...state,
        banned: false,
        loggedIn: true,
        role: registerInfo.role,
        username: registerInfo.username,
        _id: registerInfo._id,
      };
      return registerState;
    case LOGOUT:
      const logoutState = {
        bio: "",
        banned: false,
        loggedIn: false,
        role: "",
        username: "",
        _id: "",
      };
      return logoutState;
    case EDIT_BIO:
      console.log(action.bio);
      state = { ...state, bio: action.bio };
      return state;
    case DELETE_USER:
      return;
    default:
      return state;
  }
};
export default userReducer;
