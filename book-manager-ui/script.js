const API_URL = 'http://localhost:3000/books';

let editMode = false;
let editingBookId = null;

async function submitBook() {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();

  if (!title || !author) return alert("Please fill in both fields");

  const payload = { title, author };

  if (editMode) {
    // Update existing book
    await fetch(`${API_URL}/${editingBookId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    editMode = false;
    editingBookId = null;
    document.getElementById('submit-button').innerText = 'Add Book';
    document.getElementById('form-title').innerText = 'Add a Book';
  } else {
    // Create new book
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  }

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  loadBooks();
}

async function loadBooks() {
  const res = await fetch(API_URL);
  const books = await res.json();

  const list = document.getElementById('bookList');
  list.innerHTML = '';

  books.forEach(book => {
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.innerHTML = `
      <div>
        <strong>${book.title}</strong> — ${book.author}
      </div>
      <div>
        <button onclick="editBook('${book._id}', '${book.title}', '${book.author}')" class="btn btn-sm btn-warning me-2">Edit</button>
        <button onclick="deleteBook('${book._id}')" class="btn btn-sm btn-danger">Delete</button>
      </div>
    `;
    list.appendChild(item);
  });
}

async function deleteBook(id) {
  if (confirm('Are you sure you want to delete this book?')) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadBooks();
  }
}

function editBook(id, title, author) {
  document.getElementById('title').value = title;
  document.getElementById('author').value = author;
  document.getElementById('submit-button').innerText = 'Update Book';
  document.getElementById('form-title').innerText = 'Edit Book';
  editMode = true;
  editingBookId = id;
}

window.onload = loadBooks;
