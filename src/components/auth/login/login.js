import React from "react";
import LoginForm from "./login-form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex flex-column">
      <h1 className="text-success text-center">ReviewSpot</h1>
      <LoginForm />
      <h1 className="text-center mt-3">OR</h1>
      <Link className="text-center mt-3" to="/register/">
        <button className="btn btn-info w-25">Create Account</button>
      </Link>
    </div>
  );
};

export default Login;
