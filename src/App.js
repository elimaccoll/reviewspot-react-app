import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./vendors/bootstrap.min.css";
import Login from "./components/auth/login/login";
import AlbumList from "./components/search/album-list";
import "./styles/index.css";
import AlbumPage from "./components/album/album-page";
import albums from "./components/data/albums.json";

function App() {
    return (
        <div className="container mt-2">
            <AlbumPage album={albums[0]} />
        </div>
    );
}

export default App;
