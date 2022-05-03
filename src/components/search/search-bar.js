import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); 
  const displayToastMessage = (message) => {
    console.log("Attempting to display redirect message.");
    const toastOptions = {
      position: toast.POSITION.TOP_CENTER,
      pauseOnHover: false,
      theme: "dark"
    };
    toast(message, toastOptions);
  };
  const Search = () => {
    const query = search.trim();
    if (query === "") {
      displayToastMessage("Please enter a valid search query.");
      return;
    }
    navigate(`/search?q=${query}`);
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
          onKeyDown={(event) => {
            if (event.key === "Enter") Search();
          }}
        />
      </div>
    </div>
  );
};
export default SearchBar;
