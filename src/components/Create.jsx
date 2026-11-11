
import { useState } from "react";
import axios from "axios";

// Define the Create component
function Create() {

  // Create state variables to store the movie details.
  // Each variable starts as an empty string.
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // This function runs when the form is submitted.
  const handleSubmit = (e) => {

    // Prevent the browser from refreshing the page
    // when the form is submitted.
    e.preventDefault();

    // Display the movie details in the browser console.
    console.log(title, year, poster);

    const movie = {
      title: title, 
      year: year, 
      poster: poster
    }

  axios.post('http://localhost:4000/api/movies', movie)
    .then((res) => {console.log(res.data)})
    .catch((error) => {console.log(error)});
}

  // Return the JSX that displays the form.
  return (
    <div>

      {/* Display a heading for the Create component */}
      <h2>This is my Create Component.</h2>

      {/* Call handleSubmit when the form is submitted */}
      <form onSubmit={handleSubmit}>

        {/* Movie title input field */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"

            // Set the input value to the title state
            value={title}

            // Update the title state whenever the user types
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        {/* Movie year input field */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"

            // Set the input value to the year state
            value={year}

            // Update the year state whenever the user types
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>

        {/* Movie poster input field */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input
            type="text"
            className="form-control"

            // Set the input value to the poster state
            value={poster}

            // Update the poster state whenever the user types
            onChange={(e) => {
              setPoster(e.target.value);
            }}
          />
        </div>

        {/* Submit button to add the movie details */}
        <input type="submit" value="Add Movie" />

      </form>
    </div>
  );
}

// Export the component so it can be used in other files
export default Create;
