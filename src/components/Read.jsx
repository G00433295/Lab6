
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Read component
const Read = () => {

  // Create a state variable to store the list of movies.
  // Initially, the array is empty.
  const [myMovies, setMovie] = useState([]);

  // useEffect runs after the component is rendered.
  // The empty dependency array [] means it runs only once
  // when the component first mounts.
  useEffect(() => {

    // Send a GET request using Axios to fetch the movie data
    // from the JSON file hosted at this URL.
    axios.get(
      'http://localhost:4000/api/movies'
    )

      // If the request succeeds, handle the response.
      .then((response) => {

        // Display the movie array in the browser console.
        console.log(response.data.movies);

        // Update the state with the retrieved movie data.
        // React will re-render the component with the new data.
        setMovie(response.data.movies);
      })

      // If the request fails, catch and log the error.
      .catch((error) => {
        console.log(error);
      });

  }, []);

  // Return the JSX that will be displayed on the page.
  return (
    <div>

      {/* Display a heading for the Read component */}
      <h2>This is my Read Component.</h2>

      {/* Pass the movie data to the Movies component
          through a prop called "movies". */}
      <Movies movies={myMovies} />

    </div>
  );
}

// Export the component so it can be imported into other files.
export default Read;
