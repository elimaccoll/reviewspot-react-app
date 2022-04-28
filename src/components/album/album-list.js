import React from "react";
import albums from "../data/albums.json";
import AlbumListItem from "./album-list-item";

// TODO: Pass in list of albums to render (home or search)
const AlbumList = () => {
  // TODO: Conditionally choose albums to render depending on if logged in or not
  return (
    <div className="list-group mt-3">
      {albums.map((album) => {
        return <AlbumListItem album={album} />;
      })}
    </div>
  );
};
export default AlbumList;
