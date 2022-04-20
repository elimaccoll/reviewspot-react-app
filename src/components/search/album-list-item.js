import React from "react";
import moment from "moment";
import { createArtistsString } from "../helpers/album";

const AlbumListItem = ({ album }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-4">
          <img
            src={album.images[0].url}
            className="rs-img-128 img-fluid"
            alt="Album cover"
          />
        </div>
        <div className="col-8">
          <div className="fw-bolder">{album.name}</div>
          <div>{createArtistsString(album.artists)}</div>
          <div>
            Release Date:{" "}
            <span className="text-muted">
              {moment(album.release_date).format("MMMM Do, YYYY")}
            </span>
          </div>
          <div className="d-flex flex-row w-100 align-items-center">
            <div className="me-2">Rating:</div>
            <div className="w-50">
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
    </li>
  );
};
export default AlbumListItem;
