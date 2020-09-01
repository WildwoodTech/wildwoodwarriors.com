import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
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
    <StyledLoginContainer>
      <StyledForm onSubmit={loginHander}>
        <StyledLabel htmlFor="username">Username</StyledLabel>
        <StyledInput
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={onChange}
        ></StyledInput>
        <StyledLabel tmlFor="password">Password</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
        ></StyledInput>
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </StyledLoginContainer>
  );
};

const StyledLabel = styled.label`
  margin-bottom: 2px;
`;

const StyledInput = styled.input`
  color: ${({ theme }) => theme.fontColor};
  width: 250px;
  height: 30px;
  border: 3px solid ${({ theme }) => theme.fontAccent};
  border-radius: 0.5rem;
  margin-bottom: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  text-align: center;
  justify-self: center;
  margin-bottom: 5px;
`;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.fontColor};
  height: 30px;
  border: 3px solid ${({ theme }) => theme.fontAccent};
  border-radius: 0.5rem;
  margin-top: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  text-align: center;
  justify-self: center;
  width: 100px;
  justify-self: center;

  &:hover {
    cursor: pointer;
    color: #edf2f7;
    background-color: ${({ theme }) => theme.fontAccent};
    border: 3px solid ${({ theme }) => theme.buttonBorderHoverColor};
  }
`;

const StyledForm = styled.form`
  display: grid;
  flex-direction: column;
  width: 250px;
  margin-top: 40px;
`;

const StyledLoginContainer = styled.div`
  display: grid;
  justify-content: center;
`;

export default Login;
