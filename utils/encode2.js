const ffmpeg = require('fluent-ffmpeg');
const { Error } = require('mongoose');

const encode2 = async (input, output, filename) => {
  try {
    const command = ffmpeg()
      .on('start', () => console.log('STARTING'))
      .on('progress', (progress) =>
        console.log(`Processing: ${progress.percent}`)
      )
      .input(input)
      .audioCodec('aac')
      .audioBitrate('128k')
      .videoCodec('libx264')
      .videoBitrate('3000k')
      .size('1280x720')
      .format('mp4')
      .screenshot({
        timestamps: ['2%'],
        filename: `${filename}.png`,
        folder: `./assets/videos/converted/thumbnails`,
        size: '1280x720',
      })
      .on('error', (error) => {
        throw new Error(error);
      })
      .on('end', () => console.log('Processing finished !'))
      .save(output);
  } catch (error) {
    console.log(error);
  }
};

module.exports = encode2;
