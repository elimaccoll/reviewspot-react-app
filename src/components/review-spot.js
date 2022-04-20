import React from "react";
import AlbumPage from "./album/album-page";
import albums from "./data/albums.json";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import reviewsReducer from "./reducers/reviews-reducer";

const reducer = combineReducers({ reviews: reviewsReducer });
const store = createStore(reducer);
const ReviewSpot = () => {
  return (
    <Provider store={store}>
      <div className="container mt-2">
        <AlbumPage album={albums[0]} />
      </div>
    </Provider>
  );
};
export default ReviewSpot;
