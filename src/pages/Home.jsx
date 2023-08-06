import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'utilities/MoviaApi';

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
      <h1>Trending today</h1>
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
