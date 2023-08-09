import { useLocation } from 'react-router-dom';
import { SearchListItem } from './MovisSearchList.styled';

const MovieSearchList = ({ movies }) => {
  const location = useLocation();
  if (movies) {
    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <SearchListItem
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </SearchListItem>
          </li>
        ))}
      </ul>
    );
  }
};
export default MovieSearchList;
