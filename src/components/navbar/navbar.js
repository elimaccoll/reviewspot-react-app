import React from "react";
import SearchBar from "../search/search";
import { Link } from "react-router-dom";

const Navbar = () => {
  // TODO: Replace this with actual loggedIn state and user id
  const loggedIn = false;
  const uid = 0;

  const handleLogout = () => {
    return;
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
          </ul>
        </div>
        <SearchBar />
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <li className={`nav-item ${loggedIn ? "d-block" : "d-none"}`}>
            <Link className="text-black nav-link" to={`/user/${uid}`}>
              <i className="fa fa-user-circle fa-2x"></i>
            </Link>
          </li>
          <li className={`nav-item ${loggedIn ? "d-block" : "d-none"}`}>
            <button className="btn btn-dark" onClick={() => handleLogout()}>
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
