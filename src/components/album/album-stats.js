import React from "react";
import moment from "moment";

const AlbumStats = ({ album }) => {
  return (
    <div className="align-text-bottom">
      <div>
        Release Date:{" "}
        <span className="text-muted">
          {moment(album.release_date).format("MMMM Do, YYYY")}
        </span>
      </div>
      <div>Total Tracks: {album.total_tracks}</div>
    </div>
  );
};

export default AlbumStats;
