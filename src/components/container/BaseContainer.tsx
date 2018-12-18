import React, { Component } from 'react';
import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';

interface IProps {
  isLoading?: boolean;
  style?: object;
}

interface IState {}

export default class BaseContainer extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        {this.props.children}
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.indicator}
            size="large"
            color="blue"
          />
        ) : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  indicator: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
