import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./vendors/bootstrap.min.css";
import Login from "./components/auth/login/login";

function App() {
    return (
        <div className="container">
            <Login />
        </div>
    );
}

export default App;
