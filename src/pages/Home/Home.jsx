import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'utilities/MoviaApi';
import { HeadTitle } from './Home.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    if (trendingMovies) {
      getMovies().then(data => {
        setTrendingMovies(data.results);
      });
    }
  }, []);
  return (
    <div>
      <HeadTitle>Trending today</HeadTitle>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
