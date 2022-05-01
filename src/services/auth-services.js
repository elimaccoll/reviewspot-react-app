import axios from "axios";

const API_BASE = "http://localhost:4000/api/v1/auth/";

export const isLoggedIn = async () => {
  const response = await axios.get(`${API_BASE}isLoggedIn`);
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_BASE}login`, {
    username: username,
    password: password,
  });
  return response.data;
};

export const register = async (username, password) => {
  const response = await axios.post(`${API_BASE}signUp`, {
    username: username,
    password: password,
  });
  return response.data;
};

export const logout = async () => {
  // TODO: Using a post for now? like appending to a ban list
  const response = await axios.post(`${API_BASE}logout`, {
    withCredentials: true,
  });
  return response.data;
};
