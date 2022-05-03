import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../actions/reports-actions";
import { isLoggedIn } from "../../services/auth-services";
import { useNavigate } from "react-router-dom";
import ReportList from "./report-list";

const ReportDashboard = () => {
  const dispatch = useDispatch();
  const noPermissionRedirect = () => {
    const redirectMessage = "You do not have access to this page.";
    navigate("/", { state: {redirectMessage}});
  }
  const userInfo = useSelector((state) => state.user);
  useEffect(() => isLoggedIn(dispatch)
    .then((response) => {
        if (!response.loggedIn) noPermissionRedirect();
      }), [userInfo.loggedIn]);
  useEffect(() => getReports(dispatch).catch((error) => {
    const permissionDenied = error.response && error.response.status === 403;
    if (permissionDenied) {
      noPermissionRedirect();
    } else {
      //TODO: Render a toast message on this
    }
  }), [dispatch]);
  const reports = useSelector((state) => state.reports);
  const noReports = !reports || (reports && reports.total === 0);
  const navigate = useNavigate();
  return (
    <div>
      <div className={`${noReports ? "d-none" : "d-block"}`}>
        <ReportList reports={reports && reports} />
      </div>
      <div className={`${noReports ? "d-block" : "d-none"} text-center mt-5`}>
        <h2>No Active Reports</h2>
      </div>
    </div>
  );
};
export default ReportDashboard;
