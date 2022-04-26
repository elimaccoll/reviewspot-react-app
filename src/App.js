import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./vendors/bootstrap.min.css";
import "./vendors/fontawesome-free-6.1.1-web/css/all.min.css";
import "./styles/index.css";
import ReviewSpot from "./components/review-spot";
import Home from "./components/home/home";
import AlbumPage from "./components/album/album-page";
import ReviewPage from "./components/reviews/review-page";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ReviewSpot />}>
            <Route index exact={true} element={<Home />} />
            <Route path="album/:aid/" exact={true} element={<AlbumPage />} />
            <Route
              path="album/:aid/review/:rid/"
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
