const express = require('express');
const path = require('path');

const router = express.Router();


// middleware for the add-book page
router.get('/add-book', (req, res, next) => {
   console.log('In the \'add-book\' middleware');
   res.sendFile(path.join(__dirname, '../', 'views', 'add-book.html'));
});

// executes the /book form action
router.post('/add-book', (req, res, next) => {
   console.log(req.body);
   res.redirect('/');
});

module.exports = router;