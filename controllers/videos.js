const Video = require('../models/Video');
const db = require('../config/db');
const fs = require('fs');
const encode = require('../utils/encode');
const encode2 = require('../utils/encode2');

// @desc    Get all videos
// @route   GET /api/v1/videos
// @access  Public
exports.getVideos = async (req, res, next) => {
  try {
    const videos = await Video.find({});

    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// @desc    Get single video
// @route   GET /api/v1/videos/thumbnail/:id
// @access  Public
exports.getThumbnail = async (req, res) => {
  try {
    const path = `assets/videos/converted/thumbnails/${req.params.id}.png`;
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
          .send(
            'Requested range not satisfiable\n' + start + ' >= ' + fileSize
          );
        return;
      }

      const chunksize = end - start + 1;
      const file = fs.createReadStream(path, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'image/png',
      };

      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'image/png',
      };
      res.writeHead(200, head);
      fs.createReadStream(path).pipe(res);
    }
  } catch (error) {
    res.status(404).json({ success: false, error });
  }
};

// @desc    Get single video
// @route   GET /api/v1/videos/:id
// @access  Public
exports.getVideo = async (req, res, next) => {
  try {
    const path = `assets/videos/converted/${req.params.id}`;
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
          .send(
            'Requested range not satisfiable\n' + start + ' >= ' + fileSize
          );
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
  } catch (error) {
    res.status(404).json({ success: false, error });
  }
};

// @desc    Upload new video
// @route   POST /api/v1/videos
// @access  Private
exports.uploadVideo = async (req, res, next) => {
  try {
    await encode2(
      `./assets/videos/${req.filename}`,
      `./assets/videos/converted/${req.filename}`,
      req.filename,
      req.io
    );
    const video = await Video.create({
      title: req.body.title,
      path: `./assets/videos/converted/${req.filename}`,
      image: `./assets/videos/converted/thumbnails/${req.filename}.png`,
      videoId: req.filename,
      category: req.body.category,
    });
    res.status(200).json({ success: true, data: video });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error });
  }
};

// @desc    Update single video
// @route   PUT /api/v1/videos/:id
// @access  Private
exports.updateVideo = async (req, res, next) => {};

// @desc    Delete single video
// @route   DELETE /api/v1/videos/:id
// @access  Private
exports.deleteVideo = async (req, res, next) => {};
