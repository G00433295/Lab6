
 // Import Express to create the server
const express = require('express');

// Create an Express application
const app = express();

// Set the port number for the server
const port = 4000;

// Import CORS to allow requests from other applications
const cors = require('cors');
app.use(cors());

// Import body-parser to read data sent to the server
const bodyParser = require('body-parser');

// Allow the server to read form data
app.use(bodyParser.urlencoded({ extended: true }));

// Allow the server to read JSON data
app.use(bodyParser.json());

// Set up headers to allow requests from other applications
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// POST request to add a new movie
app.post('/api/movies', (req, res) => {

  // Display the movie data in the console
  console.log(req.body);

  // Send a response confirming the movie was received
  res.send("Movie added: " + req.body.title);
});

// GET request for the home page
app.get('/', (req, res) => {

  // Display Hello World when the home page is opened
  res.send('Hello World!');
});

// GET request to return a list of movies
app.get('/api/movies', (req, res) => {

  // Create an array containing three movies
  const movies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];

  // Send the movie list back as JSON
  res.json({movies});
});

// Start the server on port 4000
app.listen(port, () => {

  // Display a message when the server starts
  console.log(`Example app listening on port ${port}`);
});
