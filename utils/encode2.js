const ffmpeg = require('fluent-ffmpeg');

const encode2 = async (input, output, filename) => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(input)
      .format('mp4')
      .videoBitrate('3000k')
      .videoCodec('libx264')
      .size('1280x720')
      .audioCodec('aac')
      .audioBitrate('128k')
      .on('progress', (progress) => console.log(progress.percent))
      .on('error', (error) => {
        return reject(error);
      })
      .on('end', () => {
        ffmpeg(input)
          .screenshot({
            timestamps: [10],
            filename: `${filename}`,
            folder: `./assets/videos/converted/thumbnails`,
            size: '720x404',
          })
          .on('error', (error) => {
            return reject(error);
          })
          .on('end', () => {
            return resolve();
          });
      })
      .save(output);
  });
};

module.exports = encode2;
