const express = require('express');
const path = require('path');

const adminData = require('./admin');
const rootDir = require('../util/path');

const router = express.Router();

// middleware for the display books page
router.get('/', (req, res, next) => {
   console.log('display.js', adminData.books);
   res.sendFile(path.join(rootDir, 'views', 'display.html'));
});

module.exports = router;