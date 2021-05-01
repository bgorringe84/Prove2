const express = require('express');
const path = require('path');

const router = express.Router();

// middleware for the display books page
router.get('/', (req, res, next) => {
   console.log('In the \'view-books\' middleware')
   res.sendFile(path.join(__dirname, '../', 'views', 'display.html'));
});

module.exports = router;