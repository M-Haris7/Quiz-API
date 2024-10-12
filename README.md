# Quiz-API
# Quiz API

A RESTful API for an online quiz application built using **Node.js** and **Express.js**. The application supports user authentication, quiz creation, and management of multiple-choice questions (MCQs). It also allows users to take quizzes and view their results.

## Features
- **User Authentication:** Register and log in users securely using JWT (JSON Web Tokens).
- **Quiz Management:** Create, fetch, and manage quizzes with multiple-choice questions (MCQs).
- **Quiz Participation:** Users can take quizzes, submit answers, and view results.
- **MCQs:** Each quiz contains multiple-choice questions with a single correct answer.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose** (for database)
- **JWT** (for authentication)
- **bcrypt.js** (for password hashing)
- **dotenv** (for environment variables)

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/M-Haris7/Quiz-API.git
   cd Quiz-API
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file in the project root:**
   ```
   JWT_SECRET=your_jwt_secret_key
   DB_URI=mongodb://localhost:27017/quizApp
   ```

4. **Run MongoDB server:**
   ```bash
   mongod
   ```

5. **Start the server:**
   ```bash
   node app.js
   ```
   Or, if you have nodemon installed:
   ```bash
   npx nodemon app.js
   ```

6. **Access the API:**
   The API will be running on `http://localhost:3000`.

## API Endpoints

### Authentication
- **Register**: `POST /api/auth/register`
  - Body: 
    ```json
    {
      "username": "testuser",
      "email": "testuser@example.com",
      "password": "password123"
    }
    ```
- **Login**: `POST /api/auth/login`
  - Body: 
    ```json
    {
      "email": "testuser@example.com",
      "password": "password123"
    }
    ```
  - Response: JWT Token

### Quiz Management
- **Create Quiz**: `POST /api/quiz/create`
  - Requires JWT Token (add `Authorization: Bearer <token>` header)
  - Body:
    ```json
    {
      "title": "Sample Quiz",
      "description": "This is a sample quiz",
      "questions": [
        {
          "question": "What is 2 + 2?",
          "options": ["1", "2", "3", "4"],
          "correctOption": 3
        }
      ]
    }
    ```

- **Get All Quizzes**: `GET /api/quiz/`
  - Requires JWT Token (add `Authorization: Bearer <token>` header)

- **Get Quiz Details**: `GET /api/quiz/:id`
  - Requires JWT Token (add `Authorization: Bearer <token>` header)

- **Submit Quiz**: `POST /api/quiz/:id/submit`
  - Requires JWT Token (add `Authorization: Bearer <token>` header)
  - Body:
    ```json
    {
      "answers": [3, 1, 2]
    }
    ```

- **Get Quiz Results**: `GET /api/quiz/:id/results`
  - Requires JWT Token (add `Authorization: Bearer <token>` header)

