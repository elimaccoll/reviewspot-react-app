import React from "react";
import AlbumListItem from "./album-list-item";

const AlbumList = ({ albums } /*, prev, next} */) => {
  // TODO: Conditionally render pagination arrows
  const albumList = albums.length !== 0 ? albums.albums : [];
  const prev = false; // If previous page
  const next = albums.next; // If next page
  const limit = albums.limit;
  const offset = albums.offset;

  const loadNext = () => {
    return;
  };
  const loadPrev = () => {
    return;
  };

  return (
    <ul className="list-group mt-3">
      {albumList &&
        albumList.map((album, ind) => {
          return <AlbumListItem album={album} key={ind} />;
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
