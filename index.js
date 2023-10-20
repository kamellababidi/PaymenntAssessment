import React from 'react';
import {AppRegistry} from 'react-native';
import ApplicationNavigator from '@navigator/index';

import {name as appName} from './app.json';

const App = () => (
  <ApplicationNavigator/>
);

AppRegistry.registerComponent(appName, () => App);
