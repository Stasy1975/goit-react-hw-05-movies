
import { getMovieCredits } from '../../servisAPI/servisAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {ListCast, ItemCast} from './Cast.styled'

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
        const data = await getMovieCredits(movieId);
           setActors([...data.slice(0, 5)]);
    };
    fetchMovies();
  }, [movieId]);

  const image = 'https://image.tmdb.org/t/p/w500';

  return (
    <ListCast>
      {actors &&
        actors.map(({ id, character, name, profile_path }) => {
          return (
            <ItemCast  key={id}>
              <img
                style={{ width: '100px' }}
                src={`${image}${profile_path}`}
                alt=""
              />
              <p>Actor: {name}</p>
              <p>Character: {character}</p>
            </ItemCast>
          );
        })}
    </ListCast>
  );
};

export default Cast;

Cast.ptopTypes = {
  actors: PropTypes.array,
  image: PropTypes.string,
};