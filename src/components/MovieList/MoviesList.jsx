import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ item }) => {
  return (
    <ul>
      {item &&
        item.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} >
                {original_title}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  item: PropTypes.array,
  NavLink: PropTypes.element,
};