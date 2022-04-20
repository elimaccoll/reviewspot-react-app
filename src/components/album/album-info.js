import React from "react";
import { createArtistsString } from "../helpers/album";

const AlbumInfo = ({ album }) => {
  return (
    <div className="bg-dark p-2">
      <div className="row mb-2">
        <div className="col-3">
          <img
            src={album.images[0].url}
            alt="Album cover."
            className="img-fluid rounded"
          />
        </div>
        <div className="col-6">
          <div className="h1">{album.name}</div>
          <div className="h2">{createArtistsString(album.artists)}</div>
        </div>
        <div className="col-3">
          <div className="d-flex flex-column justify-content-end">
            <button className="btn btn-block btn-info">Write Review</button>
            <div className="rs-rating-bar p-2">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: `${album.popularity}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
