import React from "react";
import { useParams } from "react-router-dom";
import AlbumList from "../album/album-list";

const SearchResults = () => {
  const { search } = useParams();
  // TODO: use 'search' to get albums to list

  return (
    <div className="mt-2">
      <AlbumList />
    </div>
  );
};
export default SearchResults;
