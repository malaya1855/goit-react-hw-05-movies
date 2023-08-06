import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'utilities/MoviaApi';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    if (trendingMovies) {
      getMovies().then(data => {
        setTrendingMovies(data.results);
      });
    }
  }, []);
  return (
    <ul>
      {trendingMovies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
