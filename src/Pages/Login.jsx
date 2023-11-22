import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../utils/common/Validation";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateLoginForm(formData);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      Cookies.set("userdata", JSON.stringify(formData));
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="inputGroup">
          <label className="label" htmlFor="username">Username</label>
          <input
            type="text"
            className="input"
            placeholder="johndoe"
            name="username"
            onChange={onChangeHandler}
            value={formData.username}
            id="username"
          />
        </div>

        <div className="inputGroup">
          <label className="label" htmlFor="email">Email</label>
          <input
            type="text"
            className="input"
            placeholder="Email"
            name="email"
            onChange={onChangeHandler}
            value={formData.email}
            id="email"
          />
        </div>

        <div className="inputGroup">
          <label className="label" htmlFor="password">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={formData.password}
            id="password"
          />
        </div>
        {error && <p className="login__errorMsg">{error}</p>}
        <button className="greenBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
