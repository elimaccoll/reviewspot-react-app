import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const Search = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };
  return (
    <div className="form-group" placeholder="Search for Album">
      <div className="input-group">
        <button
          className="btn btn-success border border-dark"
          onClick={() => Search()}
        >
          <i className="fa fa-search text-dark"></i>
        </button>
        <input
          className="form-control"
          placeholder="Search for Album"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
