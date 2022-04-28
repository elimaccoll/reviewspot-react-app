import React from "react";

const RegisterForm = () => {
  return (
    <>
      <div className="form-group mb-3">
        <div className="form-floating mb3">
          <input
            type="username"
            id="register-username"
            className="form-control"
            placeholder="Username"
          />
          <label htmlFor="register-username" className="input-label">
            Username
          </label>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="form-floating mb3">
          <input
            type="password"
            id="register-password"
            placeholder="Password"
            className="form-control"
          />
          <label htmlFor="register-password" className="input-label">
            Password
          </label>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="form-floating mb3">
          <input
            type="password"
            id="register-password"
            placeholder="Password"
            className="form-control"
          />
          <label htmlFor="register-password" className="input-label">
            Verify Password
          </label>
        </div>
      </div>
      <button className="btn btn-success">Register</button>
    </>
  );
};

export default RegisterForm;
