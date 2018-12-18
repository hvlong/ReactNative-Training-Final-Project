import React, { Component } from 'react';
import { Text } from 'react-native';

interface IProps {
  text: string;
  numberOfLine?: number;
  style?: object;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
}

interface IState {}

export class MLabel extends React.PureComponent<IProps, IState> {
  render() {
    return (
      <Text
        {...this.props}
        style={this.props.style}
        numberOfLines={this.props.numberOfLine}
        ellipsizeMode={this.props.ellipsizeMode}
      >
        {this.props.text}
      </Text>
    );
  }
}
