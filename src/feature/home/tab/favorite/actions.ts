export const GET_FAVORITE_LIST = 'GET_FAVORITE_LIST';

export const getFavoriteList = () => {
  return {
    type: GET_FAVORITE_LIST
  };
};

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = (movieItem: IMovie) => {
  return {
    type: ADD_FAVORITE,
    movieItem
  };
};

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = (movieItem: IMovie) => {
  return {
    type: REMOVE_FAVORITE,
    movieItem
  };
};
