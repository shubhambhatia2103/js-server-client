# Node.js Client-Server Example

This repository contains a basic client-server setup using Node.js and Express. The server provides a simple API endpoint to serve text data and images, while the client fetches and displays this data.

## Introduction

### What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications.

### What is Express.js?

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to build single-page, multi-page, and hybrid web applications.

### What We Are Doing

- Setting up a basic Node.js server using Express.js.
- Serving static files (images) from the server.
- Creating an endpoint to serve JSON data.
- Fetching and displaying data from the server on a client-side HTML page.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A code editor like [Visual Studio Code](https://code.visualstudio.com/).


## Prerequisites

- Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- A code editor like Visual Studio Code (VS Code).

## Project Structure
```bash
js-server-client/
├── node_modules/
├── public/
│ └── images/
│ ├── image1.jpg
│ ├── image2.jpg
│ └── image3.jpg
├── package-lock.json
├── package.json
├── server.js
└── index.html
```

## Setup Instructions

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/yourusername/js-server-client.git
   cd js-server-client
   ```
2. **Install Dependencies:**
   
   ```sh
   npm install
   ```

3. **Start the Node.js Server:**
   ```sh
   node server.js
   ```
   The server will start and run at `http://localhost:3000`.

3. **Serve the Client HTML:**
   In another terminal, run the following command to serve the client HTML using:
   ```sh
   http-server
   ```
   By default, `http-server` will start at `http://localhost:8080`.

4. **Open the Client in a Browser:**
   Open your web browser and navigate to `http://localhost:8080`. You should see the client-side application with a button to fetch data from the server.


## Server ('server.js')

The server is built using Express.js and serves static files from the 'public directory'. It also provides an endpoint to return JSON data, including a message and an array of image URLs.

## Client ('index.html')
The client is a simple HTML page that uses JavaScript to fetch data from the server and display it.

















   
