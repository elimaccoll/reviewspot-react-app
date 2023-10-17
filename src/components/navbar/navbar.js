import React, { useEffect } from "react";
import SearchBar from "../search/search-bar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/user-actions";
import moment from "moment";
import { login } from "../../actions/user-actions";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO: Fix this auto login using session - MOVE THIS
    const loggedInUntil = localStorage.getItem("loggedInUntil");
    const loggedIn = loggedInUntil && moment(loggedInUntil) >= moment();
    if (loggedIn) {
      login(dispatch);
    }
  }, [dispatch]);

  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;
  const moderator = userInfo.role === "moderator";
  const userId = userInfo._id;

  const handleLogout = () => {
    logout(dispatch);
  };

  const renderReports = loggedIn && moderator ? "d-inline" : "d-none";
  const renderProfile = loggedIn ? "d-inline" : "d-none";
  const renderLogin = !loggedIn ? "d-inline" : "d-none";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light rounded">
      <div className="d-flex justify-content-between align-items-center w-100 px-3 gap-3">
        <Link className="navbar-brand text-black" to={`/`}>
          ReviewSpot
        </Link>
        <Link
          className={`nav-link text-black active text-center ${renderReports}`}
          to={`/reports/`}
        >
          Reports
        </Link>
        <div>
          <SearchBar />
        </div>
        <div
          className={`d-flex justify-content-center align-items-center gap-3 ${renderProfile}`}
        >
          <Link
            className="text-black d-flex align-items-center text-decoration-none"
            to={`/user/${userId}/`}
          >
            <i className="fa fa-user-circle fa-2x"></i>
            <span className="ms-1">{userInfo.username}</span>
          </Link>
          <button className="btn btn-dark" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <Link className={`text-black ${renderLogin}`} to={"/login"}>
          Login/Register
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
