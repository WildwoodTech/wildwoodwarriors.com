import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);

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
      const data = await axios.post('/api/v1/videos', formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={fileSubmit}>
        <input type="file" name="videoFile" onChange={inputFormUpload}></input>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title"></input>
        <label htmlFor="category">Category:</label>
        <input type="text" name="category"></input>
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default Upload;
