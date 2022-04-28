import React from "react";
import SearchBar from "../search/search";

const Navbar = () => {
  // TODO: Replace this with actual loggedIn state
  const loggedIn = false;
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
        <ul className="navbar-nav d-flex justify-content-center">
          <li className={`nav-item ${loggedIn ? "d-block" : "d-none"}`}>
            <a className="nav-link text-black active" href="#">
              <i className="fa fa-user-circle fa-2x"></i>
            </a>
          </li>
          <li className={`nav-item ${loggedIn ? "d-none" : "d-block"}`}>
            <a className="nav-link text-black" href="/login">
              Login
            </a>
          </li>
          <li className={`nav-item ${loggedIn ? "d-none" : "d-block"}`}>
            <a className="nav-link text-black" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
