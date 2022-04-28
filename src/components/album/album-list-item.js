import React from "react";
import { createArtistsString } from "../helpers/album";
import AlbumRatingBar from "./album-rating-bar";
import AlbumStats from "./album-stats";
import { Link } from "react-router-dom";
import albums from "../data/albums.json";

const AlbumListItem = ({ album }) => {
  // TODO: Replace link path with album id
  const albumID = albums.indexOf(album);
  return (
    <Link className="album-list-item " to={`/album/${albumID}`}>
      <div className="list-group-item">
        <div className="row mb-2">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <img
              src={album.images[0].url}
              alt="Album cover."
              className="img-fluid rounded"
            />
          </div>
          <div className="col-9 col-lg-6">
            <div className="h1">{album.name}</div>
            <div className="h2">{createArtistsString(album.artists)}</div>
            <AlbumStats album={album} />
            <div className="d-block d-lg-none">
              <AlbumRatingBar album={album} />
            </div>
          </div>
          <div className="col-3 d-none d-lg-block">
            <AlbumRatingBar album={album} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlbumListItem;
