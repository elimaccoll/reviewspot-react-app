import axios from "axios";
import { API_BASE } from "./constants";

export const isLoggedIn = async () => {
  const response = await axios.get(`${API_BASE}/auth/isLoggedIn`);
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_BASE}/auth/login`, {
    username: username,
    password: password,
  });
  return response.data;
};

export const register = async (username, password) => {
  const response = await axios.post(`${API_BASE}/auth/signUp`, {
    username: username,
    password: password,
  });
  return response.data;
};

export const logout = async () => {
  // TODO: Using a post for now? like appending to a ban list
  const response = await axios.post(`${API_BASE}/auth/logout`, {
    withCredentials: true,
  });
  return response.data;
};
