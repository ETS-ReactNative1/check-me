/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import symptomsStyle from './symptoms.style';

const Intro = () => {
    return (
        <View style={symptomsStyle.cardbackground}>
            <View style={symptomsStyle.topSection}>
                <Text style={symptomsStyle.step}>Step 1/8</Text>
                <Image style={symptomsStyle.symptomImg} source={require('./../../assets/images/old.png')} />
                <Text style={symptomsStyle.title}>Ready</Text>
            </View>
            <View style={symptomsStyle.bottomSection}>
                <Text style={symptomsStyle.question}>Are you ready?</Text>
                <Text style={symptomsStyle.description}>Pudding gummi bears pudding gummies wafer sweet wafer sweet marzipan chupa chups soufflé. Wafer fruitcake marshmallow</Text>
                <TouchableOpacity style={symptomsStyle.btn}>
                    <Text style={symptomsStyle.btnText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function Symptoms() {
    return (
        <View style={symptomsStyle.background}>
            <Intro />
        </View>
    );
};

export default Symptoms;
