import * as service from "../services/user-services";

export const EDIT_BIO = "EDIT_BIO";
export const DELETE_USER = "DELETE_USER";
export const BAN_USER = "BAN_USER";

export const editBio = async (dispatch, user, bio) => {
  const status = await service.editBio(user, bio);
  // TODO: Check status
  dispatch({
    type: EDIT_BIO,
    user,
    bio,
  });
};

// TODO: Not really sure how this works -- Log them out?
export const deleteUser = async (dispatch, user) => {
  const status = await service.deleteUser(user);
  // TODO: check status
  dispatch({
    type: DELETE_USER,
    user,
  });
};

export const banUser = async (dispatch, user) => {
  const status = await service.banUser(user);
  // TODO: check status
  dispatch({
    type: BAN_USER,
    user,
  });
};
