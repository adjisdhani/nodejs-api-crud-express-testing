const Book = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
    Book.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getBookById = (req, res) => {
    Book.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Book not found' });
        res.json(results[0]);
    });
};

exports.createBook = (req, res) => {
    const newBook = req.body;
    Book.create(newBook, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, ...newBook });
    });
};

exports.updateBook = (req, res) => {
    const updatedBook = req.body;
    Book.update(req.params.id, updatedBook, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Book updated' });
    });
};

exports.deleteBook = (req, res) => {
    Book.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Book deleted' });
    });
};