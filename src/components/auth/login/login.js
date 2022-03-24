import React from "react";
import LoginForm from "./login-form";

const Login = () => {
    return (
        <div className="d-flex flex-column">
            <h1 className="text-success text-center">ReviewSpot</h1>
            <LoginForm />
        </div>
    );
};

export default Login;
