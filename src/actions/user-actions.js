import * as user_service from "../services/user-services";
import * as auth_service from "../services/auth-services";
import moment from "moment";

export const EDIT_BIO = "EDIT_BIO";
export const DELETE_USER = "DELETE_USER";
export const BAN_USER = "BAN_USER";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
export const GET_USER = "GET_USER";
export const IS_LOGGED_IN = "IS_LOGGED_IN";

export const isLoggedIn = async (dispatch) => {
  const response = await auth_service.isLoggedIn();
  // console.log(response);
  dispatch({
    type: IS_LOGGED_IN,
    response,
  });
};

export const login = async (dispatch, username, password) => {
  const response = await auth_service.login(username, password);
  // TODO: Check response
  localStorage.setItem("loggedInUntil", moment().add(1, "week").toISOString());
  dispatch({
    type: LOGIN,
    response,
  });
};

export const findUserById = async (dispatch, userId) => {
  const user = await user_service.findUserById(userId);
  dispatch({
    type: GET_USER,
    user,
  });
};

export const register = async (dispatch, username, password) => {
  const response = await auth_service.register(username, password);
  // TODO: check response
  localStorage.setItem("loggedInUntil", moment().add(1, "week").toISOString());
  dispatch({
    type: REGISTER,
    response,
  });
};

export const logout = async (dispatch) => {
  const response = await auth_service.logout();
  // TODO: check response
  localStorage.removeItem("loggedInUntil");
  dispatch({
    type: LOGOUT,
    response,
  });
};

export const editBio = async (dispatch, userId, bio) => {
  const status = await user_service.editBio(userId, bio);
  // TODO: Check status
  dispatch({
    type: EDIT_BIO,
    bio,
  });
};

// TODO: Not really sure how this works -- Log them out?
export const deleteUser = async (dispatch, user) => {
  const status = await user_service.deleteUser(user);
  // TODO: check status
  dispatch({
    type: DELETE_USER,
    user,
  });
};

export const banUser = async (dispatch, user) => {
  const status = await user_service.banUser(user);
  // TODO: check status
  dispatch({
    type: BAN_USER,
    user,
  });
};
