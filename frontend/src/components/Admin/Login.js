import React, { useState, useReducer } from 'react';
import styles from './Login.module.scss';
import axios from 'axios';

const initalState = {
  username: '',
  password: '',
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const { username, password } = state;

  const loginHander = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post('/api/v1/users/login', {
        username,
        password,
      });
      props.setNeedLogin(false);
      props.setUser(user.data.user);
    } catch (error) {}
  };

  return (
    <div className={styles['Login-Container']}>
      <form className={styles['Form']} onSubmit={loginHander}>
        <label className={styles['Label']} htmlFor="username">
          Username
        </label>
        <input
          className={styles['Input']}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChange}
        ></input>
        <label className={styles['Label']} htmlFor="password">
          Password
        </label>
        <input
          className={styles['Input']}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
        ></input>
        <button className={styles['Button']} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
