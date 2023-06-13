import express from 'express';
import { getBook, createBook, UpdateBook, deleteBook } from '../Controller/bookController.js';
const Route = express.Router();


Route.get('/getbook', getBook);
Route.post('/getbook', createBook);
Route.patch('/getbook', UpdateBook);
Route.delete('/getbook', deleteBook);

export default Route;