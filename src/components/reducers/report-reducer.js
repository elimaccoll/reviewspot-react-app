import {
  DISMISS_REPORT,
  GET_REPORTS,
  REPORT_COMMENT,
  REPORT_REVIEW,
  GET_REPORTED_COMMENT,
} from "../../actions/reports-actions";

const reportReducer = (state = [], action) => {
  switch (action.type) {
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
        reports: reportsWithoutDismissed,
      };
      return state;
    default:
      return state;
  }
};
export default reportReducer;
