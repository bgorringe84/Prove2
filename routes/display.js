const express = require('express');
const path = require('path');

const adminData = require('./admin');
const rootDir = require('../util/path');

const router = express.Router();

// middleware for the display books page
router.get('/', (req, res, next) => {
   res.render('display', {bks: adminData.books, pageTitle: 'Books'});
});

module.exports = router;