import React from "react";
import moment from "moment";

const AlbumStats = ({ album, numReviews }) => {
  const releaseDateStr = album
    ? moment(album.release_date).format("MMMM Do, YYYY")
    : "";
  return (
    <div className="align-text-bottom">
      <div>
        Release Date: <span className="text-muted">{releaseDateStr}</span>
      </div>
      <div>Tracks: {album && album.total_tracks}</div>
      <div>Reviews: {numReviews && numReviews}</div>
    </div>
  );
};

export default AlbumStats;
