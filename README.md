# Simple CRUD Application

This is a very basic CRUD (Create, Read, Update, Delete) application built using **HTML**, **CSS**, **JavaScript**, and **MongoDB**. The application allows users to perform CRUD operations on a simple database collection.

## Features
- **Create**: Add new entries to the database.
- **Read**: View a list of existing entries.
- **Update**: Edit existing entries.
- **Delete**: Remove entries from the database.

## Technologies Used
- **Frontend**:
  - HTML
  - CSS
  - JavaScript (Vanilla JS, no frameworks)
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd simple-crud-app
```

### 2. Install Dependencies
Run the following command to install the required Node.js packages:
```bash
npm install
```

### 3. Configure the `.env` File
Create a `.env` file in the root directory and add the following:
```env
MONGODB_URL=mongodb://localhost:27017/<database-name>
JWT_SECRET=<your-secret-key>
```
Replace `<database-name>` with your MongoDB database name and `<your-secret-key>` with a secure secret key for token generation.

### 4. Start the MongoDB Server
Ensure MongoDB is running locally on your system:
```bash
mongosh
```

### 5. Start the Application
Run the following command to start the server:
```bash
node server.js
```
The application will be accessible at `http://localhost:3000`.

## Project Structure
```
.
├── models/
│   └── entryModel.js      # MongoDB schemas and models
├── routes/
│   └── crudRoutes.js      # API endpoints for CRUD operations
├── public/
│   ├── index.html         # Frontend HTML
│   ├── style.css          # Styling for the app
│   └── script.js          # JavaScript for frontend logic
├── server.js              # Main server file
├── .env                   # Environment variables
├── package.json           # Node.js dependencies
└── README.md              # Project documentation
```

## API Endpoints

### Create Entry
- **URL**: `/api/create`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```

### Read Entries
- **URL**: `/api/read`
- **Method**: `GET`

### Update Entry
- **URL**: `/api/update/:id`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```

### Delete Entry
- **URL**: `/api/delete/:id`
- **Method**: `DELETE`

## Usage
1. Open the application in your browser at `http://localhost:3000`.
2. Use the interface to add, view, edit, or delete entries.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

Feel free to reach out for questions or suggestions!
