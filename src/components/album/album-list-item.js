import React from "react";
import { createArtistsString } from "../helpers/album";
import RatingBar from "../rating-bar/rating-bar";
import AlbumStats from "./album-stats";
import { Link } from "react-router-dom";

const AlbumListItem = ({ album }) => {
  const albumId = album.id;
  const numReviews = album && album.numReviews;

  return (
    <Link className="album-list-item " to={`/album/${albumId}`}>
      <div className="list-group-item">
        <div className="row mb-2">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <img
              src={album && album.images[0].url}
              alt="Album cover."
              className="img-fluid rounded"
            />
          </div>
          <div className="col-9">
            <div className="h2">{album && album.name}</div>
            <div className="h3">
              {album && createArtistsString(album.artists)}
            </div>
            <AlbumStats album={album} numReviews={numReviews} />
            <div className="d-block">
              <RatingBar rating={album.avgRating} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlbumListItem;
