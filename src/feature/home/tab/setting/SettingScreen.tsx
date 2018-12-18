import React, { Component } from 'react';
import { strings } from '../../../../helper/strings';
import { AppColor } from '../../../../helper/colors';
import BaseContainer from '../../../../components/container/BaseContainer';

export default class SettingScreen extends React.PureComponent {
  static navigationOptions = () => {
    return {
      headerTitle: strings.setting,
      headerTintColor: AppColor.white,
      headerStyle: {
        backgroundColor: AppColor.primary
      }
    };
  };

  render() {
    return <BaseContainer isLoading={false} />;
  }
}
