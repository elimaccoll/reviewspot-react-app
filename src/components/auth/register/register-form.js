import React, { useState } from "react";
import { register } from "../../../actions/user-actions";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    verify_password: "",
  });

  const dispatch = useDispatch();

  const handleRegister = () => {
    if (credentials.password !== credentials.verify_password) {
      return;
    }
    register(dispatch, credentials.username, credentials.password);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="form-group mb-3 w-50">
        <div className="form-floating mb3">
          <input
            type="username"
            id="register-username"
            className="form-control"
            placeholder="Username"
            value={credentials.username}
            onChange={(event) =>
              setCredentials({ ...credentials, username: event.target.value })
            }
          />
          <label htmlFor="register-username" className="input-label">
            Username
          </label>
        </div>
      </div>
      <div className="form-group mb-3 w-50">
        <div className="form-floating mb3">
          <input
            type="password"
            id="register-password"
            placeholder="Password"
            className="form-control"
            value={credentials.password}
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
          <label htmlFor="register-password" className="input-label">
            Password
          </label>
        </div>
      </div>
      <div className="form-group mb-3 w-50">
        <div className="form-floating mb3">
          <input
            type="password"
            id="register-verify-password"
            placeholder="Password"
            className="form-control"
            value={credentials.verify_password}
            onChange={(event) =>
              setCredentials({
                ...credentials,
                verify_password: event.target.value,
              })
            }
          />
          <label htmlFor="register-verify-password" className="input-label">
            Verify Password
          </label>
        </div>
      </div>
      <button className="btn btn-success w-25" onClick={() => handleRegister()}>
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
