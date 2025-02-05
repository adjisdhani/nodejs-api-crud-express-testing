const db = require('../config/db');

class Book {
    static getAll(callback) {
        db.query('SELECT * FROM books', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM books WHERE id = ?', [id], callback);
    }

    static create(book, callback) {
        db.query('INSERT INTO books SET ?', book, callback);
    }

    static update(id, book, callback) {
        db.query('UPDATE books SET ? WHERE id = ?', [book, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM books WHERE id = ?', [id], callback);
    }
}

module.exports = Book;