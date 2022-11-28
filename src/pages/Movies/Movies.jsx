import { useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../servisAPI/servisAPI';
import { Form } from './Movies.styled';

import PropTypes from 'prop-types';
import MovieList from '../../components/MovieList/MoviesList';

const Movies = () => { 
  const [movie, setMovie] = useState([]);
  const [nameMovie, setNameMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: nameMovie });
  };

  useEffect(() => {  
    const fetchMovie = async () => {
      const data = await getMovies(query);
      setMovie(data);
    };
    fetchMovie();
  }, [query]);

  const handleChange = event => {
    setNameMovie(event.target.value);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameMovie}
          name="search"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <MovieList item={movie} />
    </Form>
  );
};

export default Movies;

Movies.propTypes = {
  movie: PropTypes.array,
  nameMovie: PropTypes.string,
  searchParams: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  MovieList: PropTypes.element,
};