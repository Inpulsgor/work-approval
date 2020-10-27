import React, { useState } from "react";
import { useDispatch } from "react-redux";

// import api from "../services/api";
import { authOperations } from "../redux/auth";

const AuthForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const loginParams = (login, password) => ({
      login,
      password,
    });

    dispatch(authOperations.login(loginParams(login, password)));
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="login">
          Login
        </label>

        <input
          className="form__input"
          id="login"
          type="text"
          placeholder="Login"
          name="login"
          value={login}
          onChange={handleLogin}
        />

        <label className="form__label" htmlFor="password">
          Password
        </label>

        <input
          className="form__input"
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button className="form__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
