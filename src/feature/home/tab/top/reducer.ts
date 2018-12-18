import {
  GET_POPULAR_MOVIE_LIST,
  GET_POPULAR_MOVIE_LIST_SUCCESS,
  GET_POPULAR_MOVIE_LIST_FAILURE
} from './actions';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../favorite/actions';

const initState: {
  movieList: Array<IMovie>;
  isLoading: boolean;
} = {
  movieList: [],
  isLoading: false
};

export const topReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      let newMovieList = state.movieList.map((item: IMovie) => {
        if (item.id === action.movieItem.id) {
          let newMovieItem = { ...item };
          newMovieItem['is_favorite'] = !newMovieItem.is_favorite;
          return newMovieItem;
        }
        return item;
      });
      return {
        ...state,
        movieList: newMovieList
      };
    }
    case REMOVE_FAVORITE: {
      let newMovieList = state.movieList.map((item: IMovie) => {
        if (item.id === action.movieItem.id) {
          let newMovieItem = { ...item };
          newMovieItem['is_favorite'] = !item.is_favorite;
          return newMovieItem;
        }
        return item;
      });
      return {
        ...state,
        movieList: newMovieList
      };
    }
    case GET_POPULAR_MOVIE_LIST:
      return {
        ...state,
        isLoading: true
      };
    case GET_POPULAR_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieList: action.movieList
      };
    case GET_POPULAR_MOVIE_LIST_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
