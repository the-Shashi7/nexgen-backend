import express from 'express';
import { getBook, createBook, UpdateBook, deleteBook } from '../Controller/bookController.js';
const Route = express.Router();


Route.get('/getbook', getBook);
Route.post('/createbook', createBook);
Route.patch('/updatebook', UpdateBook);
Route.delete('/deletebook', deleteBook);

export default Route;