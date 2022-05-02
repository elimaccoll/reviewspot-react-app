import axios from "axios";

const API_BASE = "http://localhost:4000/api/v1";

export const reportReview = async (reason, reviewId, albumId) => {
  const response = await axios.post(
    `${API_BASE}/album/${albumId}/review/${reviewId}/report`,
    { reason: reason }
  );
  return response.data;
};

export const reportComment = async (reason, reviewId, albumId, commentId) => {
  const response = await axios.post(
    `${API_BASE}/album/${albumId}/review/${reviewId}/comment/${commentId}/report`,
    { reason: reason }
  );
  return response.data;
};

export const getReports = async () => {
  const response = await axios.get(`${API_BASE}/moderator/reports`, {
    params: { limit: 10, offset: 0 },
  });
  return response.data;
};

export const dismissReport = async (reportId) => {
  const response = await axios.put(
    `${API_BASE}/moderator/report/${reportId}/dismiss`
  );
  return response.data;
};

export const banUser = async (reason, userId) => {
  const response = await axios.put(`${API_BASE}/user/${userId}/ban`, {
    reason: reason,
  });
  return response.data;
};

export const getCommentByURI = async (uri) => {
  const response = await axios.get(`${API_BASE}${uri}`);
  return response.data;
};
