/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

import languageStyle from './language.style';

const _storeData = async (data) => {
    try {
        await AsyncStorage.setItem('language', data)
        .then(val => {
            Actions.mainScreens();
        })
        
    } catch (error) {
        Alert.alert('Error', error);
    }
};

function Language(props) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visibility}
            onRequestClose={props.setVisibility}
        >
            <View style={languageStyle.Modalbody}>
                <View style={languageStyle.modalView}>
                    <Text style={languageStyle.modalText}>Select a language</Text>

                    <TouchableOpacity
                        onPress={() => {
                            _storeData('en');
                            props.setVisibility();
                            Actions.refresh({ key: 'mainScreens'});
                        }}
                    >
                        <View style={languageStyle.languageHorizontal}>
                            <Image style={languageStyle.flag} source={require('./../../assets/images/english.jpg')} />
                            <Text style={languageStyle.textStyle}>English</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            _storeData('fr');
                            props.setVisibility();
                            Actions.refresh({ key: 'mainScreens'});
                        }}
                    >
                        <View style={languageStyle.languageHorizontal}>
                            <Image style={languageStyle.flag} source={require('./../../assets/images/french.png')} />
                            <Text style={languageStyle.textStyle}>French</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

Language.propTypes = {
    setVisibility: PropTypes.func,
    visibility: PropTypes.bool
};

export default Language;
