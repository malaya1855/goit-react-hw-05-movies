import { MovieSearch } from 'components/MovieSearch';
import { MovieSearchList } from 'components/MovieSearchList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'utilities/MoviaApi';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const queryMovie = searchParams.get('query');
    if (queryMovie) {
      searchMovie(queryMovie).then(data => {
        setMovies(data.results);
      });
    }
  }, [searchParams]);
  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <MovieSearch onSubmit={onSubmit} />
      <MovieSearchList movies={movies} />
    </div>
  );
};
