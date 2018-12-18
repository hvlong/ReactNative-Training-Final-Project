import React from 'react';
import { connect } from 'react-redux';
import BaseContainer from '../../../../components/container/BaseContainer';
import { getPopularMovieList } from './actions';
import { FlatList, StyleSheet } from 'react-native';
import { AppColor } from '../../../../helper/colors';
import { addFavorite, removeFavorite } from '../favorite/actions';
import MovieItem from '../../../common/movie/MovieItem';
import { strings } from '../../../../helper/strings';
import { INavigation } from '../../../../interface/INavigation';
// import { NavigationScreenProp } from 'react-navigation';

interface IProps {
  // navigation: NavigationScreenProp<any, any>;
  navigation: INavigation;
  isLoading: boolean;
  movieList: Array<any>;
  getPopularMovieList: () => void;
  onAddFavorite: (movieItem: IMovie) => void;
  onRemoveFavorite: (movieItem: IMovie) => void;
}

interface IState {}

class TopScreen extends React.PureComponent<IProps, IState> {
  static navigationOptions = () => {
    return {
      headerTitle: strings.top,
      headerTintColor: AppColor.white,
      headerStyle: {
        backgroundColor: AppColor.primary
      }
    };
  };

  componentDidMount() {
    this.props.getPopularMovieList();
  }

  renderItem = ({ item }: { item: IMovie }) => {
    return (
      <MovieItem
        movieItem={item}
        onFavoritePress={() => {
          item.is_favorite
            ? this.props.onRemoveFavorite(item)
            : this.props.onAddFavorite(item);
        }}
        onPress={() => {
          this.props.navigation.navigate('movieDetail', {
            movieItem: item
          });
        }}
      />
    );
  };

  keyExtra = (item: any) => item.id.toString();

  render() {
    return (
      <BaseContainer isLoading={false} style={styles.container}>
        <FlatList
          style={styles.container}
          data={this.props.movieList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtra}
        />
      </BaseContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.top.isLoading,
    movieList: state.top.movieList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPopularMovieList: () => dispatch(getPopularMovieList()),
    onAddFavorite: (movieItem: IMovie) => dispatch(addFavorite(movieItem)),
    onRemoveFavorite: (movieItem: IMovie) => dispatch(removeFavorite(movieItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
