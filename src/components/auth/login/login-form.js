import React, { useEffect, useState } from "react";
import { login } from "../../../actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleLogin = () => {
    const toastOptions = {
      position: toast.POSITION.TOP_CENTER,
      pauseOnHover: false,
      theme: "dark"
    };
    login(dispatch, credentials.username, credentials.password)
    .then()
    .catch((error) => {
      if (error.response.status < 500) {
        toast("Incorrect username or password. Please try again.", toastOptions);
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
            id="login-username"
            className="form-control"
            placeholder="Username"
            value={credentials.username}
            onChange={(event) =>
              setCredentials({ ...credentials, username: event.target.value })
            }
          />
          <label htmlFor="login-username" className="input-label">
            Username
          </label>
        </div>
      </div>
      <div className="form-group mb-3 w-50">
        <div className="form-floating mb3">
          <input
            type="password"
            id="login-password"
            placeholder="Password"
            className="form-control"
            value={credentials.password}
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
          <label htmlFor="login-password" className="input-label">
            Password
          </label>
        </div>
      </div>
      <button className="btn btn-success w-25" onClick={() => handleLogin()}>
        Log in
      </button>
    </div>
  );
};

export default LoginForm;
