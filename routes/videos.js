const express = require("express");
const {
  getVideos,
  getVideo,
  uploadVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videos");

// Middleware
// const authentication = require("../middleware/authentication");

const router = new express.Router();

router.route("/").get(getVideos).post(uploadVideo);

router.route("/:id").get(getVideo).patch(updateVideo).delete(deleteVideo);

module.exports = router;
