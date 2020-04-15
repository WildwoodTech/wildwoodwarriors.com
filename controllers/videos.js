const fs = require('fs');

// const Video = require("../models/Video");
// const db = require("../config/db");

// @desc    Get all videos
// @route   GET /api/v1/videos
// @access  Private
exports.getVideos = async (req, res, next) => {};

// @desc    Get single video
// @route   GET /api/v1/videos/:id
// @access  Private
exports.getVideo = async (req, res, next) => {
  const path = `assets/videos/${req.params.id}.mp4`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize) {
      res
        .status(416)
        .send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
      return;
    }

    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
};

// @desc    Upload new video
// @route   POST /api/v1/videos
// @access  Private
exports.uploadVideo = async (req, res, next) => {};

// @desc    Update single video
// @route   PUT /api/v1/videos/:id
// @access  Private
exports.updateVideo = async (req, res, next) => {};

// @desc    Delete single video
// @route   DELETE /api/v1/videos/:id
// @access  Private
exports.deleteVideo = async (req, res, next) => {};
