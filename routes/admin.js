const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

//array to hold onto the books
const books = [];

// middleware for the add-book page
router.get('/add-book', (req, res, next) => {
   console.log('In the \'add-book\' middleware');
   res.render('add-book', {
      pageTitle: 'Add Book',
      path: 'admin/add-book'
   });
});

// executes the /book form action
router.post('/add-book', (req, res, next) => {
   books.push(req.body);
   res.redirect('/');
});

exports.routes = router;
exports.books = books;
