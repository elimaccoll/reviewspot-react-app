import React from "react";
import RegisterForm from "./register-form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-flex flex-column">
      <h1 className="text-success text-center">ReviewSpot</h1>
      <RegisterForm />
      <h1 className="text-center mt-3">OR</h1>
      <Link className="text-center mt-3" to="/login/">
        <button className="btn btn-info w-25">Log In</button>
      </Link>
    </div>
  );
};

export default Register;
