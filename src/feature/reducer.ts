import { combineReducers } from 'redux';
import { topReducer } from './home/tab/top/reducer';
import { favoriteReducer } from './home/tab/favorite/reducer';
import { movieDetailReducer } from './movie-detail/reducers';

export const reducer = combineReducers({
  top: topReducer,
  favorite: favoriteReducer,
  movieDetail: movieDetailReducer
});
