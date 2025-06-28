// books.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Book = require('../models/Book');

let bookId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  const book = new Book({ title: 'Test Book', author: 'Tester' });
  const savedBook = await book.save();
  bookId = savedBook._id.toString();
});

afterEach(async () => {
  await Book.deleteMany({});
});

describe('Book API Endpoints', () => {
  test('GET /books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /books', async () => {
    const res = await request(app)
      .post('/books')
      .send({ title: 'New Book', author: 'Author Name' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('New Book');
  });

  test('PUT /books/:id', async () => {
    const res = await request(app)
      .put(`/books/${bookId}`)
      .send({ title: 'Updated Title', author: 'Updated Author' });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Title');
  });

  test('DELETE /books/:id', async () => {
    const res = await request(app).delete(`/books/${bookId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Book deleted');
  });
});
