import React from "react";

const LoginForm = () => {
    return (
        <>
            <div className="form-group mb-3">
                <div className="form-floating mb3">
                    <input
                        type="username"
                        id="login-username"
                        className="form-control"
                        placeholder="Username"
                    />
                    <label htmlFor="login-username" className="input-label">
                        Username
                    </label>
                </div>
            </div>
            <div className="form-group mb-3">
                <div className="form-floating mb3">
                    <input
                        type="password"
                        id="login-password"
                        placeholder="Password"
                        className="form-control"
                    />
                    <label htmlFor="login-password" className="input-label">
                        Password
                    </label>
                </div>
            </div>
            <button className="btn btn-success">Log in</button>
        </>
    );
};

export default LoginForm;
