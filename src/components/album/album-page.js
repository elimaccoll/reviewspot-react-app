import React from "react";
import AlbumInfo from "./album-info";
import ReviewList from "../reviews/review-list";
import { useParams } from "react-router-dom";
import albums from "../data/albums.json";

const AlbumPage = () => {
  const { aid } = useParams();
  // TODO: Replace this with db entry with that id
  const album = albums[aid];
  return (
    <div>
      <AlbumInfo album={album} />
      <ReviewList />
    </div>
  );
};

export default AlbumPage;
