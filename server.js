const express = require('express');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
require('./config/db');

// Route files
const videos = require('./routes/videos');
const users = require('./routes/users');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Pass socket to req
app.use((req, res, next) => {
  req.io = io;
  next();
});
// Enable CORS
app.use(cors());

// Cookie parser
app.use(cookieParser());

// Body parser
app.use(express.json());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
// app.use(xss());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

// Serve Static Build
app.use(express.static(path.join(__dirname, './frontend/build')));

// Mount routers
app.use('/api/v1/users', users);
app.use('/api/v1/videos', videos);

// Catch all back to React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

server.listen(process.env.PORT, () =>
  console.log(
    chalk.yellow.bold.underline(`Server running on port: ${process.env.PORT}`)
  )
);

// Handle unhandled promise rejections
// process.on("unhandledRejection", (error, promise) => {
//   logs.error(`Error: ${error.message}`);
//   // Close server & exit process
//   app.close(() => process.exit(1));
// });
