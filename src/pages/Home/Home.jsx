import { useEffect, useState } from 'react';
import { getMovies } from 'utilities/MoviaApi';
import { HeadTitle } from './Home.styled';
import MovieList from 'components/MovieSearchList/MovieSearchList';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(data => {
      setMovies(data.results);
    });
  }, [movies]);
  return (
    <div>
      <HeadTitle>Trending today</HeadTitle>
      {movies.length !== 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
