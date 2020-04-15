const convert = () => {
  child_process.execFile(
    "ffmpeg",
    [
      "-i",
      input,
      "-s",
      "1280x720",
      "-b:v",
      "5000k",
      "-b:a",
      "128k",
      "-c:v",
      "libx264",
      "-c:a",
      "aac",
      "-threads",
      "6",
      output,
    ],
    (error, stdout, stderr) => {
      console.log(error);
      console.log(stdout);
      console.log(stderr);
    }
  );
};
