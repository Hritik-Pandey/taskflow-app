TaskFlow – Full Stack Task Management System
🚀 Project Overview

TaskFlow is a Full Stack Task Management Web Application developed using the MERN Stack.
It allows users to:

Register and Login securely
Create and manage projects
Create and manage tasks
Track project workflow
Store data in MongoDB Atlas
Use JWT Authentication for security

This project was built as an industry-ready assignment project.

🛠️ Tech Stack
Frontend
React.js
Vite
Tailwind CSS
Axios
React Router DOM
Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
bcrypt.js
Deployment
Railway (Frontend + Backend)
MongoDB Atlas
✨ Features
Authentication
User Registration
User Login
JWT Token Authentication
Password Hashing using bcrypt
Dashboard
Project Statistics
Task Statistics
Clean Responsive UI
Project Management
Create Projects
Store Projects in MongoDB
Task Management
Create Tasks
Task Status Management
Security
Protected Backend APIs
JWT-based Authorization
📂 Folder Structure
TaskFlowWebApp/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── validators/
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone YOUR_GITHUB_REPOSITORY_LINK
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY

Run Backend:

npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🌐 API Endpoints
Authentication
Register User
POST /api/auth/register
Login User
POST /api/auth/login
Projects
Create Project
POST /api/projects
Get Projects
GET /api/projects
Tasks
Create Task
POST /api/tasks
Get Tasks
GET /api/tasks
🔐 JWT Authentication

Protected routes require token in headers:

Authorization: Bearer YOUR_TOKEN
🚀 Deployment
Frontend

Deployed on Railway

Backend

Deployed on Railway

Database

MongoDB Atlas

📸 Screenshots

Add screenshots here after deployment.

Example:

Login Page
Register Page
Dashboard
Projects Page
Tasks Page
👨‍💻 Author
Hritik Pandey

Full Stack Developer
MERN Stack Enthusiast