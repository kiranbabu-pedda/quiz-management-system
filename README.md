Quiz Management System

Overview
The  Quiz Management System  is a full-stack application built with  TypeScript ,  Express.js ,  React.js ,  ShadCN UI , and a  SQL database (MySQL/PostgreSQL) . It enables users to  create, manage, and participate in quizzes .

Features
-  User Authentication  (Login functionality for teachers)
-  Quiz CRUD Operations  (Create, Read, Update, Delete quizzes)
-  RESTful API with Knex.js 
-  Frontend with React and ShadCN UI 
-  Responsive Design 


Backend Setup (Express + TypeScript)

1. Clone the Repository 
 
git clone https://github.com/your-username/quiz-management-system.git
cd quiz-management-system/quizo-backend
 

2. Install Dependencies 
 
npm install
 

3. Configure Environment Variables 

Create a `.env` file in the `quizo-backend` directory and add:
 
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=quizo
PORT=5001
 

4. Run Database Migrations 

If using MySQL/PostgreSQL, run:
 
npx knex migrate:latest
 

5. Start the Backend Server 
 
npm run dev
 

API will be available at:  `http://localhost:5000`

API Documentation

1. Authentication API 
      
Login 
`POST /auth/login`

Request Body:
 
 json
{
  "username": "teacher",
  "password": "password123"
}
 
Response:
 
 json
{
  "message": "Login successful!"
}
 

2. Quiz APIs 
      
Create Quiz 

`POST /quizzes`

Request Body:
 
 json
{
  "title": "Math Quiz",
  "description": "Basic Algebra",
  "teacher_id": 1
}
 

Response:
 
 json
{
  "message": "Quiz created!"
}
 

Get All Quizzes
 
`GET /quizzes`

Get Quiz by ID
 
`GET /quizzes/:id`

Update Quiz
 
`PUT /quizzes/:id`

Delete Quiz
 
`DELETE /quizzes/:id`

 
Frontend Setup (React + ShadCN UI)

1. Navigate to Frontend Directory 
 
cd ../quiz-management
 

2. Install Dependencies 
 
npm install
 

3. Start the Frontend Server 
 
npm run dev
 

Frontend will be available at:  `http://localhost:5173`

 
Tech Stack
-  Backend:  TypeScript, Express.js, Knex.js, MySQL/PostgreSQL
-  Frontend:  React, TypeScript, ShadCN UI, Tailwind CSS
-  Database:  MySQL or PostgreSQL

 
Contributing
Feel free to fork the repository and submit pull requests.

License
This project is licensed under the MIT License.
