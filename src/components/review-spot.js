import React from "react";
import { Outlet } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import reviewsReducer from "./reducers/reviews-reducer";
import Navbar from "./navbar/navbar";

// TODO: update store contents
const reducer = combineReducers({ reviews: reviewsReducer });
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
    </Provider>
  );
};
export default ReviewSpot;
