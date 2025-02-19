import React, { useEffect } from "react";
import AlbumList from "../album/album-list";
import ReviewList from "../reviews/review-list";
import { useDispatch, useSelector } from "react-redux";
import { findHomeAlbums } from "../../actions/albums-actions";
import { isLoggedIn } from "../../actions/user-actions";
import { findPopularReviews } from "../../actions/reviews-actions";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { cookieTest } from "../../services/auth-services";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Home = () => {
  const dispatch = useDispatch();
  // const { state } = useLocation();
  // const redirectMessage = (state && state.redirectMessage) || null;
  // console.log("Redirect Message: " + redirectMessage || "null");
  // useEffect(() => redirectMessage && displayToastMessage(redirectMessage), []);
  useEffect(() => isLoggedIn(dispatch), []);
  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;

  useEffect(() => findHomeAlbums(dispatch), []);
  const albums = useSelector((state) => state.albums);

  const reviewState = useSelector((state) => state.reviews);
  const popularReviews = reviewState.reviews && reviewState.reviews.reviews;
  useEffect(() => findPopularReviews(dispatch), []);

  const displayToastMessage = (message) => {
    console.log("Attempting to display redirect message.");
    const toastOptions = {
      position: toast.POSITION.TOP_CENTER,
      pauseOnHover: false,
      theme: "dark",
    };
    toast(message, toastOptions);
  };

  return (
    <div>
      <div className="row d-none d-md-flex">
        <div className="col-12 col-md-8">
          <AlbumList albums={albums} />
        </div>
        <div className="col-4 mt-3 d-none d-md-block">
          <h3 className="text-center font-responsive">
            &#128293; Hottest Takes &#128293;
          </h3>
          {popularReviews && popularReviews.length > 0 ? (
            <ReviewList reviews={{ reviews: popularReviews }} />
          ) : (
            <h4 className="text-center text-muted">No reviews to show.</h4>
          )}
        </div>
      </div>
      <div className="d-block d-md-none mt-2">
        <Tabs
          defaultActiveKey="albums"
          id="uncontrolled-tab-example"
          className=""
        >
          <Tab eventKey="albums" title="Albums">
            <AlbumList albums={albums} />
          </Tab>
          <Tab eventKey="reviews" title="&#128293; Hottest Takes &#128293;">
            <div className="mt-3">
              {popularReviews && popularReviews.length > 0 ? (
                <ReviewList reviews={{ reviews: popularReviews }} />
              ) : (
                <h4 className="text-center text-muted">No reviews to show.</h4>
              )}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default Home;
