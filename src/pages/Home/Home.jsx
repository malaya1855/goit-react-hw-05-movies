import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from 'utilities/MoviaApi';
import { HeadTitle, MoviesLink } from './Home.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (trendingMovies) {
      getMovies().then(data => {
        setTrendingMovies(data.results);
      });
    }
  }, [trendingMovies]);
  return (
    <div>
      <HeadTitle>Trending today</HeadTitle>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MoviesLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
