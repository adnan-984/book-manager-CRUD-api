const Book = require('../models/Book');
const { getBooks } = require('../controllers/bookController');

test('should return books', async () => {
  Book.find.mockResolvedValue([{ title: 'Test', author: 'Author' }]);
  const req = {};
  const res = {
    json: jest.fn()
  };
  await getBooks(req, res);
  expect(res.json).toHaveBeenCalledWith([{ title: 'Test', author: 'Author' }]);
});
