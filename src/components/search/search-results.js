import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumList from "../album/album-list";
import { findSearchAlbums } from "../../actions/albums-actions";
import { useDispatch, useSelector } from "react-redux";

const SearchResults = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  useEffect(() => findSearchAlbums(dispatch, search), [search]);

  return (
    <div className="mt-2">
      <AlbumList albums={albums} />
    </div>
  );
};
export default SearchResults;
