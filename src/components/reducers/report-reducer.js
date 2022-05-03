import {
  DISMISS_REPORT,
  GET_REPORTS,
  REPORT_COMMENT,
  REPORT_REVIEW,
  GET_REPORTED_COMMENT,
  BAN_USER,
} from "../../actions/reports-actions";

const reportReducer = (state = [], action) => {
  switch (action.type) {
    case BAN_USER:
      const total = state.reports.length;
      const reportsWithoutBanned = state.reports.filter(
        (report) => report.authorId !== action.banAudit.bannedUser
      );
      state = {
        ...state,
        total: state.total - (total - reportsWithoutBanned.length),
        reports: reportsWithoutBanned,
      };
      return state;
    case GET_REPORTED_COMMENT:
      return;
    case REPORT_COMMENT:
      return action.report;
    case REPORT_REVIEW:
      return action.report;
    case GET_REPORTS:
      state = action.reports;
      return state;
    case DISMISS_REPORT:
      const reportsWithoutDismissed = state.reports.filter(
        (report) => report._id !== action.report._id
      );
      state = {
        ...state,
        total: state.total - 1,
        reports: reportsWithoutDismissed,
      };
      return state;
    default:
      return state;
  }
};
export default reportReducer;
