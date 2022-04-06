import React from "react";
import AlbumInfo from "./album-info";
import ReviewList from "../reviews/review-list";

const AlbumPage = ({ album }) => {
    return (
        <div>
            <AlbumInfo album={album} />
            <ReviewList />
        </div>
    );
};

export default AlbumPage;
