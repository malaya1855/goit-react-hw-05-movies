import { MovieSearch } from 'components/MovieSearch/MovieSearch';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'utilities/MoviaApi';

import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieSearchList/MovieSearchList';
import { ErrorText } from 'components/Reviews/Reviews.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const queryMovie = searchParams.get('query');
    if (queryMovie) {
      searchMovie(queryMovie).then(data => {
        setMovies(data.results);
        setLoading(false);
      });
    }
  }, [searchParams]);
  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <MovieSearch onSubmit={onSubmit} />
        {loading ? (
          <Loader />
        ) : movies.length !== 0 ? (
          <MovieList movies={movies} />
        ) : (
          <ErrorText>There are no movies by your search</ErrorText>
        )}
      </div>
    </Suspense>
  );
};
export default Movies;
