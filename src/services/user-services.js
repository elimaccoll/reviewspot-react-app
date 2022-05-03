import axios from "axios";
import { API_BASE } from "./constants";

export const editBio = async (userId, bio) => {
  const response = await axios.put(`${API_BASE}/user/${userId}/`, {
    bio: bio,
  });
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await axios.get(`${API_BASE}/user/${userId}/`);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await axios.delete(`${API_BASE}/user/${user._id}`);
  return response.data;
};

export const banUser = async (reason, userId) => {
  const response = await axios.put(`${API_BASE}/user/${userId}/ban`, {
    reason: reason,
  });
  return response.data;
};
