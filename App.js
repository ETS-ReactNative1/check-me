/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Home from './src/container/home/home';

const App: () => React$Node = () => {
  return (
    <>
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar initial />
        </Stack>
      </Router>
    </>
  );
};

export default App;
