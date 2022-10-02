import { Fragment, useCallback, useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import ErrorBoundary from './error/errorBoundary';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setApiError('');
    try {

      const apiResponse = await fetch('https://swapi.dev/api/films');
      if (!apiResponse.ok) {
        throw new Error("Something Went Wrong!!");
      }
      const data = await apiResponse.json();
      setMovies(data.results);

    } catch (err) {
      setApiError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);
  let content = <p>Found No Movies.</p>
  if (movies.length > 0) {
    content = <MovieList movies={movies} />
  }
  if (isLoading) {
    content = <h2>Loading movies....</h2>
  }
  if (apiError) {
    content = <h2>{apiError}</h2>
  }
  return (
    <Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <ErrorBoundary>
          {content}
        </ErrorBoundary>
      </section>
    </Fragment>

  );
}

export default App;
