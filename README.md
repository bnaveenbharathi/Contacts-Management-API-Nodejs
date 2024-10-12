# Contacts Management API

This project is a **Contacts Management API** built using **Node.js**, **Express.js**, and **MongoDB**. It allows users to manage their personal contact list by providing full CRUD (Create, Read, Update, Delete) operations for contacts. The API uses **JSON Web Token (JWT)** for authentication and protects user data, ensuring that only the contact owner can manage their contacts.

## Features

- Create new contacts
- Retrieve all contacts for a logged-in user
- Retrieve a specific contact by ID
- Update a contact
- Delete a contact
- Protected routes using JWT-based authentication

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **Express-Async-Handler**: Simple middleware for handling exceptions inside async functions
- **JWT (JSON Web Token)**: For securing the API routes

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.x or higher)
- **MongoDB** (v4.x or higher)
- **Git**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/contacts-management-api.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd contacts-management-api
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```bash
PORT=5000
CONNECTION_STRING="mongodb://localhost:27017/mycontacts"
ACCESS_TOKEN_SECRET = "marknbv@2022" 
```

### 4. Connect to MongoDB

Ensure that MongoDB is running locally or you can use a cloud-based MongoDB service like MongoDB Atlas. Update the `MONGO_URI` in the `.env` file with your connection string.

### 5. Start the Server

Start the server by running:

```bash
npm start
```

Your API should now be running at: `http://localhost:5000`.

## API Documentation

### Base URL: `/api/contacts`

1. **Get All Contacts** - `GET /api/contacts`  
   **Description**: Retrieves all contacts for the logged-in user.  
   **Access**: Private (requires token)  
   **Response**:  
   - `200 OK`: Returns an array of contacts belonging to the user.

2. **Create a Contact** - `POST /api/contacts`  
   **Description**: Creates a new contact for the logged-in user.  
   **Access**: Private (requires token)  
   **Request Body**:  
   - `name` (string) - Name of the contact (required)  
   - `email` (string) - Email of the contact (required)  
   - `phone` (string) - Phone number of the contact (required)  
   **Response**:  
   - `201 Created`: Returns the created contact.

3. **Get a Contact** - `GET /api/contacts/:id`  
   **Description**: Retrieves a specific contact by ID.  
   **Access**: Private (requires token)  
   **Response**:  
   - `200 OK`: Returns the contact if found.  
   - `404 Not Found`: If the contact does not exist.

4. **Update a Contact** - `PUT /api/contacts/:id`  
   **Description**: Updates an existing contact.  
   **Access**: Private (requires token)  
   **Request Body**: (optional fields to update)  
   - `name` (string) - New name of the contact  
   - `email` (string) - New email of the contact  
   - `phone` (string) - New phone number of the contact  
   **Response**:  
   - `200 OK`: Returns the updated contact.  
   - `403 Forbidden`: If the contact does not belong to the user.  
   - `404 Not Found`: If the contact does not exist.

5. **Delete a Contact** - `DELETE /api/contacts/:id`  
   **Description**: Deletes a contact.  
   **Access**: Private (requires token)  
   **Response**:  
   - `200 OK`: Returns a success message after deleting the contact.  
   - `403 Forbidden`: If the contact does not belong to the user.  
   - `404 Not Found`: If the contact does not exist.

## Authentication

This API uses JWT authentication to secure all routes. To access any of the protected routes, you must include the Authorization header in your requests with a valid JWT token.

**Example**:

```bash
Authorization: Bearer <your-jwt-token>
```

