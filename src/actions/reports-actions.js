import * as service from "../services/reports-services";

export const BAN_USER = "BAN_USER";
export const REPORT_REVIEW = "REPORT_REVIEW";
export const REPORT_COMMENT = "REPORT_COMMENT";
export const GET_REPORTS = "GET_REPORTS";
export const DISMISS_REPORT = "DISMISS_REPORT";
export const GET_REPORTED_COMMENT = "GET_REPORTED_COMMENT";

export const reportReview = async (dispatch, reason, reviewId, albumId) => {
  const report = await service.reportReview(reason, reviewId, albumId);
  dispatch({
    type: REPORT_REVIEW,
    report,
  });
};

export const reportComment = async (
  dispatch,
  reason,
  reviewId,
  albumId,
  commentId
) => {
  const report = await service.reportComment(
    reason,
    reviewId,
    albumId,
    commentId
  );
  dispatch({
    type: REPORT_COMMENT,
    report,
  });
};

export const getReports = async (dispatch) => {
  const reports = await service.getReports();
  dispatch({
    type: GET_REPORTS,
    reports,
  });
};

export const dismissReport = async (dispatch, reviewId) => {
  const report = await service.dismissReport(reviewId);
  dispatch({
    type: DISMISS_REPORT,
    report,
  });
};

export const getBanAudits = async (dispatch, reason, reviewId, albumId) => {
  const report = await service.reportReview(reason, reviewId, albumId);
  dispatch({
    type: REPORT_REVIEW,
    report,
  });
};

export const banUser = async (dispatch, reason, userId) => {
  const user = await service.banUser(reason, userId);
  dispatch({
    type: BAN_USER,
    user,
  });
};

export const getCommentByURI = async (dispatch, uri) => {
  const comment = await service.getCommentByURI(uri);
  dispatch({
    type: GET_REPORTED_COMMENT,
    comment,
  });
};
