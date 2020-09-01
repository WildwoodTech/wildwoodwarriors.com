const express = require('express');

const {
  getUser,
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

// Middleware
const authentication = require('../middleware/authentication');
const adminAuth = require('../middleware/adminAuth');

const router = new express.Router();

router.route('/').get(authentication, getUser).post(adminAuth, createUser);

router.route('/login').post(loginUser);

router.route('/logout').get(authentication, logoutUser);

module.exports = router;
