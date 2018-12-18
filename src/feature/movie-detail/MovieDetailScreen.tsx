import React from 'react';
import BaseContainer from '../../components/container/BaseContainer';
import { connect } from 'react-redux';
import { AppColor } from '../../helper/colors';
import { View, StyleSheet } from 'react-native';
import { INavigation } from '../../interface/INavigation';
import HeaderLeft from '../common/headerLeft/HeaderLeft';
import MNetworkImage from '../../components/image/MNetworkImage';
import { MLabel } from '../../components/label/MLabel';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getMovieDetail } from './actions';
import { addFavorite, removeFavorite } from '../home/tab/favorite/actions';

interface IProps {
  navigation: INavigation;
  movie: IMovie;
  getMovieDetail: (id: number) => void;
  isLoading: boolean;
  onAddFavorite: (movieItem: IMovie) => void;
  onRemoveFavorite: (movieItem: IMovie) => void;
}

interface IState {}

class MovieDetailScreen extends React.PureComponent<IProps, IState> {
  static navigationOptions = ({ navigation }: { navigation: INavigation }) => {
    let movieItem = navigation.getParam('movieItem') as IMovie;
    return {
      headerTitle: movieItem.title,
      headerTintColor: AppColor.white,
      headerStyle: {
        backgroundColor: AppColor.primary
      },
      headerLeft: <HeaderLeft onPress={() => navigation.pop()} />,
      headerRight: <View />
    };
  };

  componentDidMount() {
    let movie = this.props.navigation.getParam('movieItem');
    if (movie) {
      this.props.getMovieDetail(movie.id);
    }
  }

  render() {
    return (
      <BaseContainer
        style={styles.baseContainer}
        isLoading={this.props.isLoading}
      >
        {this.props.movie && (
          <View style={styles.baseContainer}>
            <View style={styles.container}>
              <MNetworkImage
                style={styles.poster}
                uri={this.props.movie.poster_path}
                resizeMode="cover"
              />
              <View style={styles.content}>
                <View style={styles.header}>
                  <MLabel
                    text={this.props.movie.title}
                    numberOfLine={2}
                    ellipsizeMode="tail"
                    style={styles.name}
                  />
                  <AntDesign
                    name="star"
                    size={30}
                    color={this.props.movie.is_favorite ? 'red' : 'gray'}
                    style={styles.favorite}
                    onPress={() => {
                      // this.props.onFavoritePress();
                    }}
                  />
                </View>
                <MLabel
                  style={styles.date}
                  text={this.props.movie.release_date}
                />
              </View>
            </View>
            <MLabel style={styles.overview} text={this.props.movie.overview} />
          </View>
        )}
      </BaseContainer>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.movieDetail.isLoading,
    movie: state.movieDetail.movie
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id)),
    onAddFavorite: (movieItem: IMovie) => dispatch(addFavorite(movieItem)),
    onRemoveFavorite: (movieItem: IMovie) => dispatch(removeFavorite(movieItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailScreen);

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    margin: 8
  },
  container: {
    flexDirection: 'row'
  },
  poster: {
    width: 100,
    height: 120
  },
  content: {
    flex: 1,
    marginLeft: 8
  },
  header: {
    flexDirection: 'row'
  },
  name: {
    flex: 1,
    fontSize: 18
  },
  favorite: {
    marginLeft: 16
  },
  date: {
    color: 'gray'
  },
  overview: {
    color: 'gray',
    marginTop: 12
  }
});
