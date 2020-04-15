// Express video server
// Ericarthurc
// April 14, 2020
// Version 0.0.1

const express = require('express');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
// require("./config/db");

// Route files
const videos = require('./routes/videos');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

// Cookie parser
app.use(cookieParser());

// Body parser
app.use(express.json());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/v1/videos', videos);

// History mode for React Router
app.use(history());

// Serve Static React
app.use(express.static('./frontend/build'));

app.listen(process.env.PORT, () =>
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
