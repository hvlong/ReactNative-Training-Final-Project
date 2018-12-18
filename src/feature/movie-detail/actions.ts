import { Api } from '../Api';

export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const startMovieDetail = () => {
  return {
    type: GET_MOVIE_DETAIL
  };
};

export const GET_MOVIE_DETAIL_SUCCESS = 'GET_MOVIE_DETAIL_SUCCESS';
export const getMovieDetailSuccess = movie => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    movie
  };
};

export const GET_MOVIE_DETAIL_FAILURE = 'GET_MOVIE_DETAIL_FAILURE';
export const getMovieDetailFailure = error => {
  return {
    type: GET_MOVIE_DETAIL_FAILURE,
    error
  };
};

export const getMovieDetail = (movieId: number) => {
  return dispatch => {
    dispatch(startMovieDetail());
    Api.get(`/3/movie/${movieId}`)
      .then(response => {
        dispatch(getMovieDetailSuccess(response.data));
      })
      .catch(error => {
        dispatch(getMovieDetailFailure(error.response));
      });
  };
};
