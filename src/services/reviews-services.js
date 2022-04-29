import axios from "axios";

const API_BASE = "http://localhost:4000/api/v1"; // TODO: Replace with actuat api paths

export const createReview = async (review, album) => {
  const response = await axios.post(`${API_BASE}/album/${album._id}/`, review);
  return response.data;
};

export const likeReview = async (review, album) => {
  const albumId = album._id;
  const response = await axios.put(
    `${API_BASE}/album/${albumId}/review/${review._id}`,
    review
  );
  return response.data;
};

export const deleteReview = async (review, album) => {
  const response = await axios.delete(
    `${API_BASE}/album/${album._id}/review/${review._id}`
  );
  return response.data;
};

// Reviews to display on home page
export const findHomeReviews = async (album, loggedIn) => {
  if (loggedIn) {
    // Get user's recent reviews
  } else {
    // Get random recent/popular reviews
  }
  const response = await axios.get(`${API_BASE}/`);
  return response.data;
};

export const findAlbumReviews = async (albumId) => {
  const response = await axios.get(`${API_BASE}/album/${albumId}/reviews`, {
    data: { limit: 10, offset: 0 },
  });
  return response.data;
};

export const findUserReviews = async (user) => {
  const response = await axios.get(`${API_BASE}/user/${user._id}`);
  return response.data;
};

export const createCommentOnReview = async (album, review, comment) => {
  const response = await axios.post(
    `${API_BASE}/album/${album._id}/review/${review._id}`,
    comment
  );
  return response.data;
};

export const deleteCommentOnReview = async (album, review, comment) => {
  const response = await axios.delete(
    `${API_BASE}/album/${album._id}/review/${review._id}`,
    comment
  );
  return response.data;
};
