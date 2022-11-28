import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../servisAPI/servisAPI';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    };
    fetchMovies();
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0
        ? reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        : 'nothing'}
    </ul>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.array,
};