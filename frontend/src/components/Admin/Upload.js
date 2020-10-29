import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [percent, setPercent] = useState(0);
  // const [encodePercent, setEncodePercent] = useState(0);

  // useEffect(() => {
  //   const socket = socketIOClient();
  //   socket.on('encode-progress', (data) => setEncodePercent(data.progress));
  // }, []);

  const inputFormUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const fileSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('videoFile', file);
    formData.append('title', e.target.title.value);
    formData.append('category', e.target.category.value);
    try {
      const options = {
        onUploadProgress: (progreeEvent) => {
          const { loaded, total } = progreeEvent;
          let percent = Math.floor((loaded * 100) / total);
          setPercent(percent);
        },
      };
      const data = await axios.post('/api/v1/videos', formData, options);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLoginContainer>
      <StyledForm onSubmit={fileSubmit}>
        <StyledFileLabel htmlFor="file-upload">Click to Upload</StyledFileLabel>
        {file && (
          <>
            <StyledP>Uploaded File:</StyledP>
            <StyledFileName>{file.name}</StyledFileName>
          </>
        )}
        <StyledFileInput
          id="file-upload"
          type="file"
          name="videoFile"
          onChange={inputFormUpload}
        ></StyledFileInput>
        <StyledLabel htmlFor="title">Title:</StyledLabel>
        <StyledInput type="text" name="title"></StyledInput>
        <StyledLabel htmlFor="category">Category:</StyledLabel>
        <StyledInput type="text" name="category"></StyledInput>
        {/* {(() => {
          switch (true) {
            case percent === 0:
              return <StyledButton type="submit">Upload</StyledButton>;
            case percent > 0 && percent < 100:
              return (
                <>
                  <StyledP>Please dont close page while uploading!</StyledP>
                  <StyledP>Uploaded {percent}%</StyledP>
                </>
              );
            case percent === 100:
              return <p>{encodePercent}</p>;
            default:
          }
        })()} */}
        {percent === 0 ? (
          <StyledButton type="submit">Upload</StyledButton>
        ) : (
            <>
              <StyledP>Please dont close page while uploading!</StyledP>
              <StyledP>Uploaded {percent}%</StyledP>
            </>
          )}
      </StyledForm>
    </StyledLoginContainer>
  );
};

const StyledP = styled.p`
  margin-top: 10px;
`;

const StyledFileName = styled.p`
  width: 250px;
  word-wrap: break-word;
  margin-bottom: 15px;
`;

const StyledFileLabel = styled.label`
  margin-bottom: 2px;
  width: 100%;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const StyledFileInput = styled.input`
  display: none;
  width: 100%;
`;

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

export default Upload;
