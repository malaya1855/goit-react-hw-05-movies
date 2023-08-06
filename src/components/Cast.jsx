import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { creditsMovie } from 'utilities/MoviaApi';

export const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    creditsMovie(movieId).then(data => setCast(data));
  }, []);
  console.log(cast);
  if (!cast) return;
  return (
    <ul>
      {cast.cast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
