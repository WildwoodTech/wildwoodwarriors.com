const child_process = require('child_process');

// const input = "./videos/test_720p.mp4";
// const output = "./videos/test_test.mp4";
// const resolution = "1280x720";
// const bitrate = "1000k";
const encode = (input, output, resolution, bitrate) => {
  return new Promise((resolve, reject) => {
    child_process.execFile(
      'ffmpeg',
      [
        '-n',
        '-i',
        input,
        '-s',
        resolution,
        '-b:v',
        bitrate,
        '-b:a',
        '128k',
        '-c:v',
        'libx264',
        '-c:a',
        'aac',
        '-f',
        'mp4',
        // "-threads",
        // "6",
        output,
        '-hide_banner',
        '-loglevel',
        'warning',
      ],
      (error, stdout, stderr) => {
        if (error != null || stderr) {
          return reject({ error, stderr });
        }
        return resolve(stdout);
      }
    );
  });
};

module.exports = encode;
