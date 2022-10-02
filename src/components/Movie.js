import classes from './Movie.module.css';
const Movie = props => {
    const movies = props.movie;
    return(
        <li className={classes.movie}>
            <h2>{movies.title}</h2>
            <h3>{movies.opening_crawl}</h3>
            <p>{movies.release_date}</p>
        </li>
    )

}

export default Movie;