import React from "react";
import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import reviewsReducer from "./reducers/reviews-reducer";
import userReducer from "./reducers/user-reducer";
import albumsReducer from "./reducers/albums-reducer";
import commentsReducer from "./reducers/comments-reducer";
import profileReducer from "./reducers/profile-reducer";
import reportReducer from "./reducers/report-reducer";
import Navbar from "./navbar/navbar";
import { ToastContainer } from "react-toastify";

// TODO: update store contents
const reducer = combineReducers({
  reviews: reviewsReducer,
  user: userReducer,
  albums: albumsReducer,
  comments: commentsReducer,
  profile: profileReducer,
  reports: reportReducer,
});
const store = createStore(reducer);
const ReviewSpot = () => {
  return (
    <Provider store={store}>
      <div className="mt-2">
        <Navbar />
      </div>
      <div className="row mt-2">
        <Outlet />
      </div>
      <ToastContainer />
    </Provider>
  );
};
export default ReviewSpot;
