import React from 'react';
import { connect } from 'react-redux';
import BaseContainer from '../../../../components/container/BaseContainer';
import { FlatList, StyleSheet } from 'react-native';
import { AppColor } from '../../../../helper/colors';
import { removeFavorite } from '../favorite/actions';
import MovieItem from '../../../common/movie/MovieItem';
import { strings } from '../../../../helper/strings';

interface IProps {
  isLoading: boolean;
  favoriteMovieList: Array<any>;
  onRemoveFavorite: (movieItem: IMovie) => void;
}

interface IState {}

class FavoriteScreen extends React.PureComponent<IProps, IState> {
  static navigationOptions = () => {
    return {
      headerTitle: strings.favorite,
      headerTintColor: AppColor.white,
      headerStyle: {
        backgroundColor: AppColor.primary
      }
    };
  };

  renderItem = ({ item }: { item: IMovie }) => {
    return (
      <MovieItem
        movieItem={item}
        onFavoritePress={() => {
          this.props.onRemoveFavorite(item);
        }}
        onPress={() => {}}
      />
    );
  };

  keyExtra = (item: any) => item.id.toString();

  render() {
    return (
      <BaseContainer isLoading={false} style={styles.container}>
        <FlatList
          style={styles.container}
          data={this.props.favoriteMovieList}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtra}
        />
      </BaseContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    favoriteMovieList: state.favorite.favoriteList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onRemoveFavorite: (movieItem: IMovie) => dispatch(removeFavorite(movieItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
