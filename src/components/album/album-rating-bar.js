import React from "react";

const AlbumRatingBar = ({ album }) => {
  return (
    <div className="d-flex flex-column justify-content-end">
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
  );
};
export default AlbumRatingBar;
