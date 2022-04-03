import React from "react";
import AlbumInfo from "./album-info";
import ReviewList from "./review-list";

const AlbumPage = ({ album }) => {
    return (
        <div>
            <AlbumInfo album={album} />
            <ReviewList />
        </div>
    );
};

export default AlbumPage;
