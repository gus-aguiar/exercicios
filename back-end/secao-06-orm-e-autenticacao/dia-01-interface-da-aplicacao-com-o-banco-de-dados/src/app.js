const express = require ('express');

const BookController = require ('./controllers/books.controller')

const app = express()

app.use(express.json())

app.get('/books', BookController.getAll)

app.get('/books/:id', BookController.getById)

app.post('/books', BookController.create)

module.exports = app;