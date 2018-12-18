import React, { PureComponent } from 'react';
import FastImage from 'react-native-fast-image';
import { IMAGE_URL } from '../../helper/constants';
interface IProps {
  uri: string;
  style?: object;
  resizeMode?: FastImage.ResizeMode;
}

interface IStates {}

export default class MNetworkImage extends PureComponent<IProps, IStates> {
  render() {
    return (
      <FastImage
        style={this.props.style}
        source={{
          uri: `${IMAGE_URL}${this.props.uri}`,
          priority: FastImage.priority.normal
        }}
        resizeMode={
          this.props.resizeMode
            ? this.props.resizeMode
            : FastImage.resizeMode.contain
        }
      />
    );
  }
}
