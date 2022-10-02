import { Fragment, useCallback, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
 const[movies, setMovies] = useState([]);
  const fetchMovieHandler = useCallback((e) => {
    fetch('https://swapi.dev/api/films').then((movies)=>{
      return movies.json();
    }).then((data) => {
      setMovies(data.results);
    });
  });

  return (
    <Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </Fragment>
  );
}

export default App;
