const mongoose = require('mongoose');
const chalk = require('chalk');

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model('Video', videoSchema);

Video.createCollection().then(function (collection) {
  console.log(chalk.green('Video collection created!'));
});

module.exports = Video;
