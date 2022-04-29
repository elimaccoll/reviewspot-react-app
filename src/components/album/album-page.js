import React, { useEffect } from "react";
import AlbumInfo from "./album-info";
import ReviewList from "../reviews/review-list";
import { useParams } from "react-router-dom";
import { findAlbumReviews } from "../../actions/reviews-actions";
import { findAlbum } from "../../actions/albums-actions";
import { useDispatch, useSelector } from "react-redux";

const AlbumPage = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  // TODO: Check if album is in state (use id) before refetching
  useEffect(() => findAlbum(dispatch, albumId), []);
  const album = useSelector((state) => state.albums);
  const albumInfo = album.album;

  useEffect(() => findAlbumReviews(dispatch, albumId), []);
  const reviews = useSelector((state) => state.reviews);
  console.log(reviews);

  return (
    <div>
      <AlbumInfo album={albumInfo} />
      <ReviewList />
    </div>
  );
};

export default AlbumPage;
