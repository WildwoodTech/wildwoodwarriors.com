import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Login from '../components/Admin/Login';
import Upload from '../components/Admin/Upload';

const Admin = () => {
  const [needLogin, setNeedLogin] = useState(false);
  const [user, setUser] = useState();

  const getUserHandler = async () => {
    try {
      const user = await axios.get('/api/v1/users/', { withCredentials: true });
      setUser(user.data.user);
    } catch (error) {
      setNeedLogin(true);
    }
  };

  useEffect(() => {
    getUserHandler();
  }, []);

  return (
    <>
      {needLogin ? (
        <Login setNeedLogin={setNeedLogin} setUser={setUser}></Login>
      ) : user ? (
        <>
          <StyledP>
            Your logged in as <strong>{user.username}</strong>
          </StyledP>
          <Upload></Upload>
        </>
      ) : null}
    </>
  );
};

export default Admin;

const StyledP = styled.p`
  margin-top: 25px;
  text-align: center;
`;
