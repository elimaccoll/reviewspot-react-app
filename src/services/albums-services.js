import axios from "axios";

const API_BASE = "http://localhost:4000/api/v1/";

export const findAlbum = async (albumId) => {
  const response = await axios.get(`${API_BASE}album/${albumId}`);
  return response.data;
};

// Albums to display on home page
export const findHomeAlbums = async () => {
  const response = await axios.get(`${API_BASE}newReleases`, {
    params: { limit: 10, offset: 0 },
  });
  return response.data;
};

export const findSearchAlbums = async (searchTerm) => {
  const response = await axios.get(`${API_BASE}search`, {
    params: { q: searchTerm, limit: 10, offset: 0 },
  });
  return response.data;
};
