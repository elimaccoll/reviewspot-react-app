import axios from "axios";

const API_BASE = "http://localhost:4000/api/v1/"; // TODO: Replace with actuat api paths

export const findAlbum = async (albumId) => {
  const response = await axios.get(`${API_BASE}album/${albumId}`);
  return response.data;
};

// Albums to display on home page
export const findHomeAlbums = async () => {
  const response = await axios.get(`${API_BASE}/`);
  return response.data;
};

export const findSearchAlbums = async (searchTerm) => {
  const response = await axios.get(`${API_BASE}/search/${searchTerm}`);
  return response.data;
};
