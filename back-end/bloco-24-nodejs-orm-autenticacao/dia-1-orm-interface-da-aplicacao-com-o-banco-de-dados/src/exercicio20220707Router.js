const express = require('express');
const BooksController = require('./controllers/BooksController');
const router = express.Router();
router.use(express.json());

router.get('/books', BooksController.getAll);
router.get('/books/:id', BooksController.getById);
router.post('/books', BooksController.create);
router.put('/books/:id', BooksController.update);
router.delete('/books/:id', BooksController..remove);

module.exports = router;
