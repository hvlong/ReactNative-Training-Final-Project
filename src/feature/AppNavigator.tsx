import React from 'react';

import { Image } from 'react-native';
// @ts-ignore
// @ts-nocheck
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import TopScreen from './home/tab/top/TopScreen';
import FavoriteScreen from './home/tab/favorite/FavoriteScreen';
import SettingScreen from './home/tab/setting/SettingScreen';
import { ic_top, ic_favorite, ic_setting } from '../../assets';
import MovieDetailScreen from './movie-detail/MovieDetailScreen';

const topStack = createStackNavigator({
  top: TopScreen
});

const favoriteStack = createStackNavigator({
  favorite: FavoriteScreen
});

const settingStack = createStackNavigator({
  setting: SettingScreen
});

const movieDetailStack = createStackNavigator({
  movieDetail: MovieDetailScreen
});

const createTabIcon = (
  focused: boolean,
  tintColor: any,
  screen: 'Top' | 'Favorite' | 'Setting'
) => {
  let source = ic_top;
  switch (screen) {
    case 'Top':
      source = ic_top;
      break;
    case 'Favorite':
      source = ic_favorite;
      break;
    case 'Setting':
      source = ic_setting;
      break;
    default:
      break;
  }
  return (
    <Image
      source={source}
      style={{
        width: 32,
        height: 32,
        resizeMode: 'contain',
        tintColor: focused ? 'blue' : 'gray'
      }}
    />
  );
};

export const tabBar = createBottomTabNavigator({
  Top: {
    screen: topStack,
    navigationOptions: {
      tabBarIcon: ({
        focused,
        tintColor
      }: {
        focused: any;
        tintColor: any;
      }) => {
        return createTabIcon(focused, tintColor, 'Top');
      }
    }
  },
  Favorite: {
    screen: favoriteStack,
    navigationOptions: {
      tabBarIcon: ({
        focused,
        tintColor
      }: {
        focused: boolean;
        tintColor: any;
      }) => {
        return createTabIcon(focused, tintColor, 'Favorite');
      }
    }
  },
  Setting: {
    screen: settingStack,
    navigationOptions: {
      tabBarIcon: ({
        focused,
        tintColor
      }: {
        focused: boolean;
        tintColor: any;
      }) => {
        return createTabIcon(focused, tintColor, 'Setting');
      }
    }
  }
});

export const mainStack = createStackNavigator(
  {
    tabBar: tabBar,
    movieDetail: movieDetailStack
  },
  {
    headerMode: 'none'
  }
);

export const AppNavigator = createAppContainer(mainStack);
