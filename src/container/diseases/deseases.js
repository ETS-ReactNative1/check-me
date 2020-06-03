import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {getDeseases, setDesease} from './../../actions/deseases';

import deseaseStyle from './deseases.style';
import theme from './../../assets/theme/color';

const strimName = text => {
  let period = text.toString().lastIndexOf('-');

  return text.substring(0, period);
};

const _storeData = async () => {
  try {
    await AsyncStorage.setItem('general', true);
  } catch (error) {
    console.log('Error', error);
  }
};

function Deseases() {
  const {deseasesData} = useSelector(state => ({
    deseasesData: state.deseases.desease,
  }));

  const dispatch = useDispatch();
  const selectDisease = item => {
    setDesease(item);
    Actions.mainScreens();
  };
  useEffect(() => {
    dispatch(getDeseases('en'));
  }, [dispatch]);
  return (
    <View style={deseaseStyle.background}>
      <Text style={deseaseStyle.title}>DISEASES</Text>
      <Text style={deseaseStyle.subTitle}>
        Select a disease to get more information.
      </Text>
      {deseasesData === null ? (
        <View style={deseaseStyle.refresh}>
          <ActivityIndicator size="large" color={theme.primary} />
        </View>
      ) : (
        <ScrollView>
          <TouchableOpacity
            onPress={() => Actions.mainScreens()}
            style={deseaseStyle.diseaseContainer}>
            <Text style={deseaseStyle.diseaseName}>Corona Virus</Text>
          </TouchableOpacity>
          {deseasesData.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => selectDisease(item)}
                style={deseaseStyle.diseaseContainer}>
                <Text style={deseaseStyle.diseaseName}>
                  {strimName(item.name)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

export default Deseases;
