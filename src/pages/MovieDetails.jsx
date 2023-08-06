import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { infoMovie } from 'utilities/MoviaApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  // console.log(location.state.from);
  useEffect(() => {
    if (movieId) {
      infoMovie(movieId).then(data => {
        setMovie(data);
      });
    }
  }, [movieId]);
  if (!movie) return;
  return (
    <div>
      <Link to={backLink}>Go Back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <h3>User Score</h3>
      <p>{movie.vote_average}</p>
      <h3>Over View</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      {movie.genres.map(item => item.name).join(', ')}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
