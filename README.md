# Node.js Client-Server Example

This repository contains a basic client-server setup using Node.js and Express. The server provides a simple API endpoint to serve text data and images, while the client fetches and displays this data.

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

## Prerequisites

- Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- A code editor like Visual Studio Code (VS Code).

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

The server is built using Express and serves static files from the 'public directory'. It also provides an endpoint to return JSON data, including a message and an array of image URLs.

## Client ('index.html')
The client is a simple HTML page that uses JavaScript to fetch data from the server and display it.

















   
