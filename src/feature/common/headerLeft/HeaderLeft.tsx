import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { ic_back } from '../../../../assets';

interface IProps {
  onPress: () => void;
}

export default class HeaderLeft extends React.PureComponent<IProps> {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress();
        }}
        style={{ alignItems: 'center', marginLeft: 4, padding: 10 }}
      >
        <Image
          source={ic_back}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}
