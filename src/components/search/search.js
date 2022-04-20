import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="form-group" placeholder="Search for Album">
        <div className="input-group">
          <button className="btn btn-success">
            <i className="fa fa-search text-dark"></i>
          </button>
          <input className="form-control" placeholder="Search for Album" />
        </div>
      </div>
    </>
  );
};
export default SearchBar;
