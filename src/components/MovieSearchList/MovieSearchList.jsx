import { useLocation } from 'react-router-dom';
import { SearchListItem } from './MovisSearchList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <SearchListItem to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </SearchListItem>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
