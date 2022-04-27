import React from "react";
import SearchBar from "../search/search";
import AlbumList from "../album/album-list";

const Home = () => {
  return (
    <div className="mt-2">
      <SearchBar />
      <AlbumList />
    </div>
  );
};
export default Home;
