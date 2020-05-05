/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Alert} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import Home from './src/container/home/home';
import theme from './src/assets/theme/color';
import SingleItem from './src/container/singleItem/singleItem';
import Symptoms from './src/container/symptoms/symptoms';
import Contact from './src/container/contact/contact';
import Statistics from './src/container/statistics/statistics';
import WebViewComponent from './src/components/webview';
import Prevention from './src/container/prevention/prevention';
import Risk from './src/container/risk/risk';
import Support from './src/container/support/support';
import Splash from './src/container/splash/splash';
import OnboardingComponent from './src/container/onboarding/onboarding';
import Deseases from './src/container/diseases/deseases';

const TabIcon = props => {
  var color = props.focused ? theme.primary : 'grey';
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 5,
      }}>
      <Icon name={props.iconName} size={21} color={color} />
    </View>
  );
};

const _storeData = async () => {
  try {
    await AsyncStorage.setItem('language', 'en');
  } catch (error) {
    Alert.alert('Error', error);
  }
};

// const _retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('language');
//     if (value === null) {
//       // We have data!!
//       return await AsyncStorage.setItem('language', 'en');
//     } else {
//       return value;
//     }
//   } catch (error) {
//     Alert.alert('Error', error);
//   }
// };

function App() {
  useEffect(() => {
    // _retrieveData();
    _storeData();
  }, []);

  return (
    <>
      <Router>
        <Stack key="root">
          <Scene key="splash" component={Splash} hideNavBar />
          <Scene key="onboarding" component={OnboardingComponent} hideNavBar />
          <Scene
            key="singleItem"
            component={SingleItem}
            navigationBarStyle={{backgroundColor: theme.primary}}
            navBarButtonColor={theme.white}
          />
          <Scene
            key="webview"
            component={WebViewComponent}
            navigationBarStyle={{backgroundColor: theme.primary}}
            navBarButtonColor={theme.white}
          />
          <Scene
            key="prevention"
            component={Prevention}
            navigationBarStyle={{backgroundColor: theme.primary}}
            navBarButtonColor={theme.white}
          />
          <Scene
            key="risk"
            component={Risk}
            navigationBarStyle={{backgroundColor: theme.primary}}
            navBarButtonColor={theme.white}
          />
          <Scene
            key="support"
            component={Support}
            navigationBarStyle={{backgroundColor: theme.primary}}
            navBarButtonColor={theme.white}
          />
          <Scene key="deseases" component={Deseases} hideNavBar initial />
          <Scene
            key="mainScreens"
            tabs={true}
            activeTintColor={theme.primary}
            tabBarPosition="bottom"
            tabBarStyle={{paddingTop: 3}}
            hideNavBar>
            <Scene
              key="home"
              component={Home}
              icon={TabIcon}
              iconName="home"
              tabBarLabel="Home"
              hideNavBar={true}
            />
            <Scene
              key="test"
              component={Symptoms}
              icon={TabIcon}
              iconName="tv"
              tabBarLabel="News"
              hideNavBar={true}
            />
            <Scene
              key="help"
              component={Contact}
              icon={TabIcon}
              iconName="medkit"
              tabBarLabel="Help"
              hideNavBar={true}
            />
            <Scene
              key="statistics"
              component={Statistics}
              icon={TabIcon}
              iconName="globe"
              tabBarLabel="Statistics"
              hideNavBar={true}
            />
          </Scene>
        </Stack>
      </Router>
    </>
  );
}

export default App;
