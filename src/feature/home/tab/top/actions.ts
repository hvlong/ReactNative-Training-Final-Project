import { Api } from '../../../Api';

export const GET_POPULAR_MOVIE_LIST = 'GET_POPULAR_MOVIE_LIST';
export const GET_POPULAR_MOVIE_LIST_SUCCESS = 'GET_POPULAR_MOVIE_LIST_SUCCESS';
export const GET_POPULAR_MOVIE_LIST_FAILURE = 'GET_POPULAR_MOVIE_LIST_FAILURE';

const starGetPopularMovieList = () => {
  return {
    type: GET_POPULAR_MOVIE_LIST
  };
};

const getPopularMovieListSuccess = (movieList: Array<IMovie>) => {
  return {
    type: GET_POPULAR_MOVIE_LIST_SUCCESS,
    movieList
  };
};

const getPopularMovieFailure = (error: any) => {
  return {
    type: GET_POPULAR_MOVIE_LIST_FAILURE
  };
};

export const getPopularMovieList = () => {
  return (dispatch: any) => {
    dispatch(starGetPopularMovieList());
    Api.get('/3/movie/popular')
      .then(response => {
        let popularMovieList: IPopularMovieResponse = response.data;
        console.log('popularMovieList', popularMovieList.results);
        dispatch(getPopularMovieListSuccess(popularMovieList.results));
      })
      .catch(error => {
        console.log('error', error.response);
        dispatch(getPopularMovieFailure(error.response));
      });
  };
};
