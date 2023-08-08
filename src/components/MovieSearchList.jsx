import { Link, useLocation } from 'react-router-dom';

const MovieSearchList = ({ movies }) => {
  const location = useLocation();
  if (movies) {
    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};
export default MovieSearchList;
