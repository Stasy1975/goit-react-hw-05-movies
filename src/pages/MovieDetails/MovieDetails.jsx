import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieDetails } from '../../servisAPI/servisAPI';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import {
  Container,
  List,
  Item,
  BtnGoBack,
  Poster,
  Podcasts,
  ListPodcasts,
  ListBorder,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data)
        setMovie([data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [movieId]);



  const image = 'https://image.tmdb.org/t/p/w500';
  const backLinkHref = location.state?.from ?? "/movies";

  return (
    <main>
      {movie &&
        movie.map(
          ({
            id,
            original_title,
            vote_average,
            overview,
            genres,
            poster_path,
          }) => {
            return (
              <Container key={id}>
                <div>
                  <BtnGoBack type="button"
                    to={backLinkHref}>
                                    
                    <AiOutlineDoubleLeft />
                    Go Back
                  </BtnGoBack>
                  <Poster src={`${image}${poster_path}`} alt="" />
                </div>
                <div>
                  <List>
                    <Item>
                      <h2>{original_title}</h2>
                    </Item>
                    <Item>
                      User Score: {Math.ceil((vote_average * 100) / 10)}%
                    </Item>
                    <Item>
                      <h3>Overview</h3>
                    </Item>
                    <Item>{overview}</Item>
                    <Item>
                      <h4>Genres</h4>
                    </Item>
                    <Item>{genres.map(item => item.name).join(', ')}</Item>
                  </List>
                </div>
              </Container>
            );
          }
        )}
      {movie && (
        <ListPodcasts>
          <li>
            <ListBorder>
              <li>Additional information</li>
              <li>
                <Podcasts to={`cast`}>Cast</Podcasts>
              </li>
              <li>
                <Podcasts to={`reviews`}>Reviews</Podcasts>
              </li>
            </ListBorder>
            <Outlet />
          </li>
        </ListPodcasts>
      )}
    </main>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.array,
  image: PropTypes.string,
  AiOutlineArrowLeft: PropTypes.element,
  Item: PropTypes.element,
  Podcasts: PropTypes.string,
};