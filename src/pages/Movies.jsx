import { MovieSearch } from 'components/MovieSearch';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'utilities/MoviaApi';

export const Movies = () => {
  const { searchParams, setSearchParams } = useSearchParams();
  useEffect(() => {
    // const query = searchParams.get('query');
    searchMovie(searchParams).then(data => {
      console.log(data);
    });
  }, [searchParams]);
  const onSubmit = query => {
    console.log(query);
    setSearchParams(query);
  };

  return (
    <div>
      <MovieSearch onSubmit={onSubmit} />
    </div>
  );
};
