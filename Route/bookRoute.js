const express = require('express');
const { getBook, createBook, UpdateBook, deleteBook } = require('../Controller/bookController');
const Route = express.Router();


Route.get('/getbook', getBook);
Route.post('/getbook', createBook);
Route.patch('/getbook', UpdateBook);
Route.delete('/getbook', deleteBook);