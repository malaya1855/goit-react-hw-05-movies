import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { creditsMovie } from 'utilities/MoviaApi';
import { CastImg, CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    creditsMovie(movieId).then(data => setCast(data));
  }, [movieId]);
  if (!cast) return;

  return (
    <CastList>
      {cast.cast.map(actor => (
        <CastItem key={actor.id}>
          <CastImg
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : ''
            }
            alt={actor.name}
          />
          <div>
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </div>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
