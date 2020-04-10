/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

import languageStyle from './language.style';

function Language() {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View style={languageStyle.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={languageStyle.Modalbody}>
                    <View style={languageStyle.modalView}>
                        <Text style={languageStyle.modalText}>Select a language</Text>

                        <TouchableHighlight
                            // style={languageStyle.languageItem}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={languageStyle.languageHorizontal}>
                                <Image style={languageStyle.flag} source={require('./../../assets/images/english.jpg')} />
                                <Text style={languageStyle.textStyle}>English</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            // style={languageStyle.languageItem}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={languageStyle.languageHorizontal}>
                                <Image style={languageStyle.flag} source={require('./../../assets/images/french.png')} />
                                <Text style={languageStyle.textStyle}>French</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={languageStyle.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={languageStyle.textStyle}>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Language;
