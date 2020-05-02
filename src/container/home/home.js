/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {getHomeData, resetHomeData} from './../../actions/home';
import {trunc} from './../../components/functions';

import Language from './../language/language';
import homeStyle from './home.style';
import theme from './../../assets/theme/color';

async function _retrieveData() {
  try {
    const value = await AsyncStorage.getItem('language');
    if (value !== null) {
      return value;
    } else {
      return 'en';
    }
  } catch (error) {
    Alert.alert('Error', error);
  }
}

function Home() {
  const {homeData} = useSelector(state => ({
    homeData: state.home.homePage,
  }));
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  // const handleRefresh = () => {
  //   dispatch(resetHomeData());
  //   dispatch(getHomeData());
  // };

  useEffect(() => {
    _retrieveData().then(val => {
      dispatch(getHomeData(val));
    });
  }, [dispatch]);
  return (
    <View style={homeStyle.background}>
      {homeData === null ? (
        <View style={homeStyle.refresh}>
          <ActivityIndicator size="large" color={theme.primary} />
        </View>
      ) : (
        <ImageBackground
          source={require('./../../assets/images/background.png')}
          style={homeStyle.backgroundImage}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Icon
              style={homeStyle.language}
              name="language"
              size={27}
              color="white"
            />
          </TouchableOpacity>
          <Text style={homeStyle.titleText}>{homeData['home-title']}</Text>
          <Language
            visibility={modalVisible}
            setVisibility={() => setModalVisible(false)}
          />

          <ScrollView style={homeStyle.cardScrollSection}>
            <TouchableOpacity
              style={homeStyle.cardSection}
              onPress={() => Actions.singleItem({symptoms: homeData.symtoms})}>
              <View style={homeStyle.cardLeftSide}>
                <Text style={homeStyle.cardTitle}>
                  {homeData.symtoms.title}
                </Text>
                <Text style={homeStyle.cardDesc}>
                  {trunc(homeData.symtoms.descripton)}
                </Text>
              </View>
              <Image
                style={homeStyle.cardRightSide}
                source={{
                  uri:
                    'https://raw.githubusercontent.com/Cressence/images/master/tiredness.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={homeStyle.cardSection}
              onPress={() =>
                Actions.prevention({prevention: homeData.prevention})
              }>
              <View style={homeStyle.cardLeftSide}>
                <Text style={homeStyle.cardTitle}>
                  {homeData.prevention.title}
                </Text>
                <Text style={homeStyle.cardDesc}>
                  {trunc(homeData.prevention.description)}
                </Text>
              </View>
              <Image
                style={homeStyle.cardRightSide}
                source={{
                  uri:
                    'https://raw.githubusercontent.com/Cressence/images/master/prevention.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={homeStyle.cardSection}
              onPress={() => Actions.risk({risk: homeData.risk})}>
              <View style={homeStyle.cardLeftSide}>
                <Text style={homeStyle.cardTitle}>{homeData.risk.title}</Text>
                <Text style={homeStyle.cardDesc}>
                  {trunc(homeData.risk.descr)}
                </Text>
              </View>
              <Image
                style={homeStyle.cardRightSide}
                source={{
                  uri:
                    'https://raw.githubusercontent.com/Cressence/images/master/old.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={homeStyle.cardSection}
              onPress={() => Actions.support({support: homeData.support})}>
              <View style={homeStyle.cardLeftSide}>
                <Text style={homeStyle.cardTitle}>
                  {homeData.support.title}
                </Text>
                <Text style={homeStyle.cardDesc}>
                  {trunc(homeData.support.description)}
                </Text>
              </View>
              <Image
                style={homeStyle.cardRightSide}
                source={{
                  uri:
                    'https://raw.githubusercontent.com/Cressence/images/master/support.png',
                }}
              />
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      )}
    </View>
  );
}

export default Home;
