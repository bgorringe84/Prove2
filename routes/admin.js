const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

//array to hold onto the books
const books = [];

// middleware for the add-book page
router.get('/add-book', (req, res, next) => {
   console.log('In the \'add-book\' middleware');
   res.sendFile(path.join(rootDir, 'views', 'add-book.html'));
});

// executes the /book form action
router.post('/add-book', (req, res, next) => {
   books.push({title: req.body.title});
   res.redirect('/');
});

exports.routes = router;
exports.books = books;
