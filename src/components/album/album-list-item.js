import React from "react";
import { createArtistsString } from "../helpers/album";
import RatingBar from "../rating-bar/rating-bar";
import AlbumStats from "./album-stats";
import { Link } from "react-router-dom";

const AlbumListItem = ({ album }) => {
  const albumInfo = album.album;
  const albumID = albumInfo.id;

  return (
    <Link className="album-list-item " to={`/album/${albumID}`}>
      <div className="list-group-item">
        <div className="row mb-2">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <img
              src={albumInfo.images[0].url}
              alt="Album cover."
              className="img-fluid rounded"
            />
          </div>
          <div className="col-9 col-lg-6">
            <div className="h1">{albumInfo.name}</div>
            <div className="h2">{createArtistsString(albumInfo.artists)}</div>
            <AlbumStats album={albumInfo} />
            <div className="d-block d-lg-none">
              <RatingBar rating={albumInfo.popularity} />
            </div>
          </div>
          <div className="col-3 d-none d-lg-block">
            <RatingBar rating={albumInfo.popularity} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlbumListItem;
