# We Share Social-Website

## Project Overview
WeShare is a social website that allows users to share and interact with posts and stories. The project is divided into two main parts: the frontend client and the backend API. The frontend client is built using React, HTML, and SCSS, while the backend API is developed using Node.js, Express.js, and MySQL for storing data.

## Project Structure
The project consists of the following folders:

- client: This folder contains the frontend client code.  
  - src: This directory contains the main source code for the React application.  
  - components: This folder contains reusable components used in the application, such as comments, leftbar, rightbar, navbar, post, posts, share, stories, and   update user.  
  - context: This folder contains the authContext for managing authentication-related state.  
  - pages: This folder contains the different pages of the application, including home, login, profile, and register.  
  - public: This directory contains the index.html file and other static assets used by the frontend.  

- api: This folder contains the backend API code.
  - controllers: This directory contains the controllers for handling the logic of different routes.  
  - routes: This directory contains the route handlers for different API endpoints.  
  - config: This directory contains configuration files, such as connect.js for the database connection.  
  - index.js: This file is the entry point for the backend server.  
  - database: This folder contains the SQL scripts and migrations for creating and managing the MySQL database.  

README.md: This file provides information about the project and its setup.

## Getting Started
To set up and run the project, follow these steps:

### Frontend Client:
Navigate to the client folder: 
``` cd client ``` 

Install dependencies: 
``` npm install ```

Start the development server: 
``` npm start ```


### Backend API:
Navigate to the api folder: 
``` cd api ```

Install dependencies: 
``` npm install ```

Set up the MySQL database by running the SQL scripts or migrations in the database folder.

Configure the database connection in the config/connect.js file.

Start the backend server: 
``` npm start ```

Make sure you have the necessary dependencies installed and the MySQL database set up before running the project.
