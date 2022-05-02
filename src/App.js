import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./vendors/bootstrap.min.css";
import "./vendors/fontawesome-free-6.1.1-web/css/all.min.css";
import "./styles/index.css";
import ReviewSpot from "./components/review-spot";
import Home from "./components/home/home";
import AlbumPage from "./components/album/album-page";
import ReviewPage from "./components/reviews/review-page";
import ProfilePage from "./components/profile/profile-page";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import Search from "./components/search/search-results";
import ReportDashboard from "./components/report/report-dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" exact={true} element={<ReviewSpot />}>
            <Route index exact={true} element={<Home />} />
            <Route path="search/:search" exact={true} element={<Search />} />
            <Route path="login/" exact={true} element={<Login />} />
            <Route path="register/" exact={true} element={<Register />} />
            <Route path="reports/" exact={true} element={<ReportDashboard />} />
            <Route
              path="user/:userId/"
              exact={true}
              element={<ProfilePage />}
            ></Route>
            <Route
              path="album/:albumId/"
              exact={true}
              element={<AlbumPage />}
            />
            <Route
              path="album/:albumId/review/:reviewId/"
              exact={true}
              element={<ReviewPage />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
