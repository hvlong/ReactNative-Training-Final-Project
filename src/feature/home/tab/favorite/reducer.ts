import { GET_FAVORITE_LIST, ADD_FAVORITE, REMOVE_FAVORITE } from './actions';

const initState: {
  favoriteList: Array<IMovie>;
} = {
  favoriteList: []
};

export const favoriteReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      let favoriteItem: IMovie = { ...action.movieItem };
      favoriteItem['is_favorite'] = true;
      return {
        ...state,
        favoriteList: [...state.favoriteList, favoriteItem]
      };
    }
    case REMOVE_FAVORITE: {
      let newFavoriteList = state.favoriteList.filter(movie => {
        return movie.id !== action.movieItem.id;
      });
      return {
        ...state,
        favoriteList: newFavoriteList
      };
    }
    case GET_FAVORITE_LIST:
      return {
        ...state
      };
    default: {
      return state;
    }
  }
};
