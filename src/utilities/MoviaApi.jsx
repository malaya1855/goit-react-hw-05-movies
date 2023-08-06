import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODJmNmIxNzBlMDM4YWU4MWFhNDZlMzA3ZDE1ZGIwMSIsInN1YiI6IjY0Y2ViODBjNmQ0Yzk3MDBlYzU3OGI2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ikTGLTWjnfTGE5E5M98yCkufilThJclt3bWkOCmv5w';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data;
};

export const searchMovie = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data;
};

export const infoMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};
export const creditsMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data;
};
export const reviewsMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data;
};
