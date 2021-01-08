import React, { useState, useEffect } from 'react';
import styles from './Upload.module.scss';
import axios from 'axios';

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
    <div className={styles['Upload-Container']}>
      <form className={styles['Form']} onSubmit={fileSubmit}>
        <label className={styles['File-Input-Label']} htmlFor="file-upload">
          Click to Upload
        </label>
        {file && (
          <>
            <p className={styles['P']}>Uploaded File:</p>
            <p className={styles['File-Input-Name']}>{file.name}</p>
          </>
        )}
        <input
          className={styles['File-Input']}
          id="file-upload"
          type="file"
          name="videoFile"
          onChange={inputFormUpload}
        ></input>
        <label className={styles['Label']} htmlFor="title">
          Title:
        </label>
        <input className={styles['Input']} type="text" name="title"></input>
        <label className={styles['Label']} htmlFor="category">
          Category:
        </label>
        <input className={styles['Input']} type="text" name="category"></input>
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
          <button className={styles['Button']} type="submit">
            Upload
          </button>
        ) : (
          <>
            <p className={styles['P']}>
              Please dont close page while uploading!
            </p>
            <p className={styles['P']}>Uploaded {percent}%</p>
          </>
        )}
      </form>
    </div>
  );
};

export default Upload;
