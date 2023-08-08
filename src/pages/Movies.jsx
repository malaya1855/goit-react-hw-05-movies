import { MovieSearch } from 'components/MovieSearch/MovieSearch';
// import { MovieSearchList } from 'components/MovieSearchList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'utilities/MoviaApi';

import { lazy, Suspense } from 'react';
const MovieSearchList = lazy(() => import('../components/MovieSearchList'));

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
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <MovieSearch onSubmit={onSubmit} />
        <MovieSearchList movies={movies} />
      </div>
    </Suspense>
  );
};
