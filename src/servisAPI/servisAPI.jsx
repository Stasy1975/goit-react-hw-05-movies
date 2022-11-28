import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0be6852ca8cd54f03df513633364c09a',
  },
});
const media_type = 'movie';
const time_window = 'week';

export const getTrending = async () => {
  console.log();
  const { data} = await instance.get(`/trending/${media_type}/${time_window}`);
  return data.results;
};



export const getSearchMovies = async query => {
  try {
    const { data } = await instance.get('/search/movie', {
      params: {
        query,
      },
    });
    console.log(data.results)
    return data.results;
    
  } catch (error) {
    alert(error);
  }
};


export const getMovieDetails  = async (movieId) => {
    const { data } = await instance.get(`/movie/${movieId}`);
      console.log(data);
    return data;
};


export const getMovieCredits  = async (movieId) => {
    const { data } = await instance.get(`/movie/${movieId}/credits`);
       return data.cast;
};

export const getMovieReviews  = async (movieId) => {
    const { data } = await instance.get(`/movie/${movieId}/reviews`);
      console.log(data.results);
    return data.results;
};

export const getMovies = query => {
  if (query === '' || query === null)  {
    return getTrending();
  } else {
    return getSearchMovies(query);
  }
};

