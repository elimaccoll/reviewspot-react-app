import React from "react";
import albums from "../data/albums.json";
import AlbumListItem from "./album-list-item";

// TODO: Pass in list of albums to render (home or search)
const AlbumList = ({ albums } /*, prev, next} */) => {
  const prev = true; // If previous page
  const next = true; // If next page

  const loadNext = () => {
    return;
  };
  const loadPrev = () => {
    return;
  };

  return (
    <ul className="list-group mt-3">
      {albums.map((album) => {
        return <AlbumListItem album={album} />;
      })}
      <div className="bg-light d-flex justify-content-around">
        <i
          className={`rs-dark clickable fas fa-arrow-left fa-2x ${
            prev ? "d-flex" : "d-none"
          }`}
          onClick={() => {
            loadPrev();
          }}
        ></i>
        <i
          className={`rs-dark clickable fas fa-arrow-right fa-2x ${
            next ? "d-flex" : "d-none"
          }`}
          onClick={() => {
            loadNext();
          }}
        ></i>
      </div>
    </ul>
  );
};
export default AlbumList;
