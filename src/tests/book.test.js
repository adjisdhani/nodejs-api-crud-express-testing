const request = require('supertest');
const app = require('../app');
const db = require('../config/db'); // Import koneksi database

describe('Book API Tests', () => {
    let bookId;

    // 🟢 Tambahkan data dummy sebelum semua tes berjalan
    beforeAll((done) => {
        db.query(
            "INSERT INTO books (title, author) VALUES ('Test Book', 'Test Author')",
            (err, result) => {
                if (err) throw err;
                bookId = result.insertId; // Simpan ID buku yang baru ditambahkan
                done();
            }
        );
    });

    it('should get all books', async () => {
        const res = await request(app).get('/api/books');
        expect(res.status).toBe(200);
    });

    it('should get book by ID', async () => {
        const res = await request(app).get(`/api/books/${bookId}`);
        expect(res.status).toBe(200);
    });

    it('should update a book', async () => {
        const res = await request(app)
            .put(`/api/books/${bookId}`)
            .send({ title: 'Updated Title', author: 'Updated Author' });
        expect(res.status).toBe(200);
    });

    it('should delete a book', async () => {
        const res = await request(app).delete(`/api/books/${bookId}`);
        expect(res.status).toBe(200);
    });

    // 🛑 Hapus semua data setelah tes selesai
    afterAll((done) => {
        db.query("DELETE FROM books WHERE id = ?", [bookId], () => {
            db.end();
            done();
        });
    });
});
