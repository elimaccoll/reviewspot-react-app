import React, { useEffect } from "react";
import SearchBar from "../search/search-bar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/user-actions";
import moment from "moment";
import { login } from "../../actions/user-actions";

const Navbar = () => {
  useEffect(() => {
    const loggedInUntil = localStorage.getItem("loggedInUntil");
    const loggedIn = loggedInUntil && moment(loggedInUntil) >= moment();
    if (loggedIn) {
      login(dispatch);
    }
  }, []);

  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;
  const moderator = userInfo.role === "moderator";
  console.log(userInfo);
  const userId = userInfo._id;

  const dispatch = useDispatch();
  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-black" href="/">
          ReviewSpot
        </a>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link text-black active" href="/">
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                loggedIn && moderator ? "d-inline" : "d-none"
              }`}
            >
              <a className="nav-link text-black active" href="/reports/">
                Reports
              </a>
            </li>
          </ul>
        </div>
        <SearchBar />
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <li className={`nav-item ${loggedIn ? "d-block" : "d-none"}`}>
            <Link
              className="text-black nav-link d-flex align-items-center"
              to={`/user/${userId}/`}
            >
              <i className="fa fa-user-circle fa-2x"></i>
              <span className="ms-1">{userInfo.username}</span>
            </Link>
          </li>
          <li className={`nav-item ${loggedIn ? "d-block" : "d-none"}`}>
            <button className="btn btn-dark" onClick={handleLogout}>
              Logout
            </button>
          </li>
          <li className={`nav-item ${loggedIn ? "d-none" : "d-block"}`}>
            <a className="nav-link text-black" href="/login">
              Login/Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
