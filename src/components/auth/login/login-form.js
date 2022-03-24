import React from "react";

const LoginForm = () => {
    return (
        <>
            <div className="form-group mb-2">
                <label htmlFor="login-username" className="input-label">
                    Username:
                </label>
                <input
                    type="username"
                    id="login-username"
                    className="form-control"
                    placeholder="Username"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="login-password" className="input-label">
                    Password:
                </label>
                <input
                    type="password"
                    name="login-password"
                    id="login-password"
                    placeholder="Password"
                    className="form-control"
                />
            </div>
            <button className="btn btn-success">Log in</button>
        </>
    );
};

export default LoginForm;
