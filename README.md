# Node.js API CRUD with Express & Jest Testing

This project is a simple CRUD API for managing book data using Node.js, Express, and MySQL. It includes unit and integration testing with Jest and Supertest.

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository
```sh
git clone https://github.com/adjisdhani/nodejs-api-crud-express-testing.git
```

### 2. Navigate to the Project Directory
```sh
cd nodejs-api-crud-express-testing
```

### 3. Install Dependencies
```sh
npm install --save-dev
```

### 4. Configure the Environment Variables
Create a `.env` file in the root directory and set up the following database configuration:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=book_database
DB_PORT=3306
```

### 5. Setup MySQL Database
Open your MySQL client and create the database:
```sql
CREATE DATABASE book_database;
```

### 6. Start the Server
```sh
npm start
```
The server will start on `http://localhost:3000`.

---

## 🛠 API Endpoints

| Method | Endpoint       | Description            |
|--------|---------------|------------------------|
| GET    | /api/books    | Get all books          |
| GET    | /api/books/:id | Get book by ID        |
| POST   | /api/books    | Create a new book      |
| PUT    | /api/books/:id | Update a book         |
| DELETE | /api/books/:id | Delete a book         |

---

## ✅ Running Tests

### 1. Run All Tests
```sh
npm test
```

### 2. Run Jest Unit & Integration Tests
```sh
npm run test:jest
```

### 3. Testing API with Jest & Supertest

The integration tests for API endpoints are located in:
```sh
src/tests/book.test.js
```

To run the integration tests, execute:
```sh
npm run test:jest
```

---

## 📌 Author
**Adjis Ramadhani Utomo**

