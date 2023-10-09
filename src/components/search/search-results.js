import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AlbumList from "../album/album-list";
import { findSearchAlbums } from "../../actions/albums-actions";
import { useDispatch, useSelector } from "react-redux";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q");
  console.log(searchParams);
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  useEffect(() => findSearchAlbums(dispatch, search), [search]);

  return (
    <div>
      <AlbumList albums={albums} />
    </div>
  );
};
export default SearchResults;
