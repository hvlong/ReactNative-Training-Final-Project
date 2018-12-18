/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/feature/AppNavigator';
import { store, persistor } from './src/feature/store';
import { configApiKey } from './src/feature/Api';
import { YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

type Props = {};

YellowBox.ignoreWarnings(['unknown call: "relay:check"']);

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
