import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./vendors/bootstrap.min.css";
import Login from "./components/auth/login/login";
import AlbumList from "./components/search/album-list";
import "./styles/index.css";

function App() {
    return (
        <div className="container">
            <AlbumList/>
        </div>
    );
}

export default App;
