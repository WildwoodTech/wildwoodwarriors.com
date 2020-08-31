const ffmpeg = require('fluent-ffmpeg');
const { Error } = require('mongoose');

const encode2 = async (input, output, filename) => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .on('progress', (progress) => console.log(progress.percent))
      .on('error', (error) => {
        return reject(error);
      })
      .on('end', () => {
        return resolve();
      })
      .input(input)
      .audioCodec('aac')
      .audioBitrate('128k')
      .videoCodec('libx264')
      .videoBitrate('3000k')
      .size('1280x720')
      .format('mp4')
      .screenshot({
        timestamps: [10],
        filename: `${filename}`,
        folder: `./assets/videos/converted/thumbnails`,
        size: '720x404',
      })
      .save(output);
  });
};

module.exports = encode2;
