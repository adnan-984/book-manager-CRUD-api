📚 Book Manager API - Full Stack Project

A simple full-stack CRUD Book Manager built using Node.js, Express, MongoDB Atlas, and vanilla JavaScript frontend. It allows users to create, read, update, and delete books.

🚀 Live Features

✅ Add Book

✅ View Book List

✅ Edit/Update Book

✅ Delete Book

🛠️ Tech Stack

Frontend: HTML, Bootstrap, JavaScript

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

API Testing: Postman & curl

📂 Project Structure

book-manager-ui/
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── public/
│   ├── index.html
│   └── script.js
├── .env
├── server.js
├── package.json
└── README.md

🌐 API Documentation

1. Get All Books

Method: GET

Endpoint: /books

Response:

[
  {
    "_id": "...",
    "title": "Atomic Habits",
    "author": "James Clear"
  }
]

2. Add a Book

Method: POST

Endpoint: /books

Body: (JSON)

{
  "title": "Deep Work",
  "author": "Cal Newport"
}

Response: Newly created book object

3. Update a Book

Method: PUT

Endpoint: /books/:id

Body: (JSON)

{
  "title": "Updated Title",
  "author": "Updated Author"
}

Response: Updated book object

4. Delete a Book

Method: DELETE

Endpoint: /books/:id

Response:

{
  "message": "Book deleted"
}

🧪 Testing with curl

Get all books:

curl http://localhost:3000/books

Add book:

curl -X POST -H "Content-Type: application/json" \
     -d '{"title": "1984", "author": "George Orwell"}' \
     http://localhost:3000/books

Update book:

curl -X PUT -H "Content-Type: application/json" \
     -d '{"title": "Updated", "author": "Author"}' \
     http://localhost:3000/books/<book_id>

Delete book:

curl -X DELETE http://localhost:3000/books/<book_id>

⚙️ How to Run the Project

🖥️ Backend Setup

git clone https://github.com/your-username/book-manager.git
cd book-manager
npm install

Create a .env file in the root:

PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/bookdb?retryWrites=true&w=majority

Start the server:

node server.js

🌐 Frontend Setup (Optional)

You can open the index.html file in a browser directly or host it using any static server.

🧠 What You Learn From This Project

Full CRUD REST API development

Connecting MongoDB with Mongoose

Structuring Express apps

Testing APIs using Postman & curl

Making API requests from frontend using fetch

📩 Feedback

Found this project useful or have suggestions? Feel free to fork, contribute or connect with me!

📌 License

MIT License

