import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILURE
} from './actions';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../home/tab/favorite/actions';

const initState: {
  movie: IMovie;
  isLoading: boolean;
} = {
  movie: null,
  isLoading: false
};

export const movieDetailReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_MOVIE_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movie: action.movie
      };
    }
    case GET_MOVIE_DETAIL_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }
    case ADD_FAVORITE: {
      return {
        ...state
      };
    }
    case REMOVE_FAVORITE: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
};
