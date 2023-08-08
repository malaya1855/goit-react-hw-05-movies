import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsMovie } from 'utilities/MoviaApi';
import { ReviewsList, ReviewsText } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsMovie(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <ReviewsText>{review.content}</ReviewsText>
        </li>
      ))}
    </ReviewsList>
  );
};
