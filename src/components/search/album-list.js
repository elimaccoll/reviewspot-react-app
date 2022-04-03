import React from "react";
import AlbumListItem from "./album-list-item";
import albums from "../data/albums.json";

const AlbumList = () => {
    return (
        <ul className="list-group">
            {
                albums.map((album) => {
                    return <AlbumListItem album={album}/>
                })
            }
        </ul>
    );
};
export default AlbumList;
