/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    View,
    Text,
    TouchableHighlight,
    Image,
} from 'react-native';

import languageStyle from './language.style';

function Language(props) {
    // const [modalVisible, setModalVisible] = useState(false);
    console.log(props.visibility)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            // onRequestClose={() => props.setVisibility}
        >
            <View style={languageStyle.Modalbody}>
                <View style={languageStyle.modalView}>
                    <Text style={languageStyle.modalText}>Select a language</Text>

                    <TouchableHighlight
                        // style={languageStyle.languageItem}
                        onPress={() => {
                            props.setVisibility;
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
    );
};

Language.propTypes ={
    setVisibility: PropTypes.func
};

export default Language;
