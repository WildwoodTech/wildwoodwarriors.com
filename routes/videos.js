const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './assets/videos');
  },
  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}`;
    req.filename = newFilename;
    cb(null, newFilename);
  },
});
const upload = multer({ storage });

const {
  getVideos,
  getVideo,
  getThumbnail,
  uploadVideo,
  updateVideo,
  deleteVideo,
} = require('../controllers/videos');

// Middleware
const authentication = require('../middleware/authentication');

const router = new express.Router();

router
  .route('/')
  .get(getVideos)
  .post(authentication, upload.single('videoFile'), uploadVideo);

router
  .route('/:id')
  .get(getVideo)
  .patch(authentication, updateVideo)
  .delete(authentication, deleteVideo);

router.route('/thumbnail/:id').get(getThumbnail);

module.exports = router;
