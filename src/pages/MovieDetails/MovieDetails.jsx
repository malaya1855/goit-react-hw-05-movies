import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { infoMovie } from 'utilities/MoviaApi';
import {
  LinkGoBack,
  MovieAddInfo,
  MovieAddInfoLink,
  MovieImg,
  MovieInfo,
} from './MovieDetails.styled';
import noPhotoImg from '../../images/no-photo.png';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
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
      <LinkGoBack to={backLink}>Go Back</LinkGoBack>
      <MovieInfo>
        <MovieImg
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : noPhotoImg
          }
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <h3>User Score</h3>
          <p>{movie.vote_average}</p>
          <h3>Over View</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres.map(item => item.name).join(', ')}
        </div>
      </MovieInfo>
      <div>
        <MovieAddInfo>
          <p>Additional information</p>
          <ul>
            <li>
              <MovieAddInfoLink to={`cast`}>Cast</MovieAddInfoLink>
            </li>
            <li>
              <MovieAddInfoLink to={`reviews`}>Reviews</MovieAddInfoLink>
            </li>
          </ul>
        </MovieAddInfo>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
