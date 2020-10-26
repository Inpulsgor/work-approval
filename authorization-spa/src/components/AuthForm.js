import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AuthForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

   const handleLogin = e => {
    setLogin(e.target.value);
  };

    const handlePassword = e => {
    setPassword(e.target.value);
  };

    const handleSubmit = e => {
    e.preventDefault();
      const setLoginParams = (login, password) => ({
        login: login,
        password: password,
      });
      dispatch(login(setLoginParams(login, password)));
    }

  return (

    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="login">Login</label>
      <input
        className="form__input"
        id="login"
        type="text"
        placeholder="Login"
        name="login"
        value={login}
        onChange={handleLogin}
      />
      <label className='form__label' htmlFor="password">Password</label>
      <input
        className='form__input'
        placeholder="Password"
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}
      />
      <button className='form__button' type="submit">Login</button>
    </form>

  )
}

export default AuthForm;


 