import React, { useState } from "react";
import { register } from "../../../actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    verify_password: "",
  });

  const dispatch = useDispatch();

  const handleRegister = () => {
    const toastOptions = {
      position: toast.POSITION.TOP_CENTER,
      pauseOnHover: false,
      theme: "dark"
    };
    if (credentials.password !== credentials.verify_password) {
      toast("Passwords do not match. Please ensure they are the same.", toastOptions);
      return;
    }
    register(dispatch, credentials.username, credentials.password)
    .catch((error) => {
      if (error.response.status < 500) {
        toast("This username is either invalid or has already been taken. Please try again.", toastOptions);
      } else {
        toast("An internal server error has occurred. Please try again or contact a site contributor.", toastOptions);
      }
    });
  };

  const userInfo = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo.loggedIn) navigate("/");
  });

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
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
