import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsMovie } from 'utilities/MoviaApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsMovie(movieId).then(data => setReviews(data.results));
  }, []);
  console.log(reviews);
  if (!reviews) {
    return <p>We do not have any reviews for this movie</p>;
  }
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>Character: {review.content}</p>
        </li>
      ))}
    </ul>
  );
};
