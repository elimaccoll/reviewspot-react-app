import axios from "axios";

const API_BASE = "http://localhost:4000/api/v1";

export const editReview = async (review, rating, reviewId, albumId) => {
  const response = await axios.put(
    `${API_BASE}/album/${albumId}/review/${reviewId}`,
    {
      content: review,
      rating: rating,
    }
  );
  return response.data;
};

export const createReview = async (review, rating, albumId) => {
  const response = await axios.post(`${API_BASE}/album/${albumId}/review`, {
    content: review,
    rating: rating,
  });
  return response.data;
};

export const findReviewComments = async (reviewId, albumId) => {
  const response = await axios.get(
    `${API_BASE}/album/${albumId}/review/${reviewId}/comments`,
    { params: { limit: 10, offset: 0 } }
  );
  return response.data;
};

export const findReviewById = async (reviewId, albumId) => {
  const response = await axios.get(
    `${API_BASE}/album/${albumId}/review/${reviewId}`
  );
  return response.data;
};

export const likeReview = async (reviewId, albumId) => {
  const response = await axios.post(
    `${API_BASE}/album/${albumId}/review/${reviewId}/like`
  );
  return response.data;
};

export const deleteReview = async (reviewId, albumId) => {
  const response = await axios.delete(
    `${API_BASE}/album/${albumId}/review/${reviewId}`
  );
  return response.data;
};

// Reviews to display on home page
export const findPopularReviews = async () => {
  const response = await axios.get(`${API_BASE}/popularReviews`);
  return response.data;
};

export const findAlbumReviews = async (albumId) => {
  const response = await axios.get(`${API_BASE}/album/${albumId}/reviews`, {
    params: {
      limit: 10,
      offset: 0,
    },
  });
  return response.data;
};

export const findUserReviews = async (userId) => {
  const response = await axios.get(`${API_BASE}/user/${userId}/reviews`, {
    params: { limit: 10, offset: 0 },
  });
  return response.data;
};

export const createCommentOnReview = async (reviewId, albumId, comment) => {
  const response = await axios.post(
    `${API_BASE}/album/${albumId}/review/${reviewId}/comment`,
    {
      content: comment,
    }
  );
  return response.data;
};

export const deleteCommentOnReview = async (reviewId, albumId, commentId) => {
  const response = await axios.delete(
    `${API_BASE}/album/${albumId}/review/${reviewId}/comment/${commentId}`
  );
  return response.data;
};
