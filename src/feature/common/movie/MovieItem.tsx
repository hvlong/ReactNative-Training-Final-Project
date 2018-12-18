import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
import MNetworkImage from '../../../components/image/MNetworkImage';
import { MLabel } from '../../../components/label/MLabel';

interface IProps {
  movieItem: IMovie;
  onPress: () => void;
  onFavoritePress: () => void;
}

interface IState {
  // isFavorite: boolean;
}

export default class MovieItem extends React.PureComponent<IProps, IState> {
  constructor(props: any) {
    super(props);
    // this.state = {
    //   isFavorite: false
    // };
  }

  renderFavorite = (item: IMovie) => {
    return (
      <AntDesign
        name="star"
        size={30}
        color={item.is_favorite ? 'red' : 'gray'}
        style={styles.favorite}
        onPress={() => {
          this.props.onFavoritePress();
        }}
      />
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.onPress();
        }}
      >
        <MNetworkImage
          style={styles.poster}
          uri={this.props.movieItem.poster_path}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <View>
            <View style={styles.header}>
              <MLabel
                text={this.props.movieItem.title}
                numberOfLine={2}
                ellipsizeMode="tail"
                style={styles.name}
              />
              {this.renderFavorite(this.props.movieItem)}
            </View>
            <MLabel
              style={styles.date}
              text={this.props.movieItem.release_date}
            />
          </View>
          <MLabel
            text={this.props.movieItem.overview}
            numberOfLine={2}
            ellipsizeMode="tail"
            style={styles.overview}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  poster: {
    width: 100,
    height: 120
  },
  content: {
    flex: 1,
    marginLeft: 8,
    justifyContent: 'space-between'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
    color: 'gray'
  }
});
