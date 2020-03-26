/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import symptomsStyle from './symptoms.style';

class Symptoms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 'intro',
        }
    }

    nextStep = (data) => {
        this.setState({ step: data });
    }

    Intro = () => {
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
                    <TouchableOpacity style={symptomsStyle.btn} onPress={() => this.nextStep('fever')}>
                        <Text style={symptomsStyle.btnText}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


    FeverStatus = () => {
        return (
            <View style={symptomsStyle.cardbackground}>
                <View style={symptomsStyle.topSection}>
                    <Text style={symptomsStyle.step}>Step 2/8</Text>
                    <Image style={symptomsStyle.symptomImg} source={require('./../../assets/images/old.png')} />
                    <Text style={symptomsStyle.title}>Fever Checkup</Text>
                </View>
                <View style={symptomsStyle.bottomSection}>
                    <Text style={symptomsStyle.question}>Are you ready?</Text>
                    <Text style={symptomsStyle.description}>Pudding gummi bears pudding gummies wafer sweet wafer sweet marzipan chupa chups soufflé. Wafer fruitcake marshmallow</Text>
                    <TouchableOpacity style={symptomsStyle.btn} onPress={() => this.nextStep('temperature')}>
                        <Text style={symptomsStyle.btnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    TempStatus = () => {
        return (
            <View style={symptomsStyle.cardbackground}>
                <View style={symptomsStyle.topSection}>
                    <Text style={symptomsStyle.step}>Step 3/8</Text>
                    <Image style={symptomsStyle.symptomImg} source={require('./../../assets/images/old.png')} />
                    <Text style={symptomsStyle.title}>temperature Checkup</Text>
                </View>
                <View style={symptomsStyle.bottomSection}>
                    <Text style={symptomsStyle.question}>Are you ready?</Text>
                    <Text style={symptomsStyle.description}>Pudding gummi bears pudding gummies wafer sweet wafer sweet marzipan chupa chups soufflé. Wafer fruitcake marshmallow</Text>
                    <TouchableOpacity style={symptomsStyle.btn} onPress={() => this.nextStep('done')}>
                        <Text style={symptomsStyle.btnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    FinalStatus = () => {
        return (
            <View style={symptomsStyle.cardbackground}>
                <View style={symptomsStyle.topSection}>
                    <Text style={symptomsStyle.step}>complete</Text>
                    <Image style={symptomsStyle.symptomImg} source={require('./../../assets/images/old.png')} />
                    <Text style={symptomsStyle.title}>Results</Text>
                </View>
                <View style={symptomsStyle.bottomSection}>
                    <Text style={symptomsStyle.question}>Are you ready?</Text>
                    <Text style={symptomsStyle.description}>Pudding gummi bears pudding gummies wafer sweet wafer sweet marzipan chupa chups soufflé. Wafer fruitcake marshmallow</Text>
                    <Text style={symptomsStyle.result}>Negative</Text>
                    <TouchableOpacity style={symptomsStyle.btn} onPress={() => this.nextStep('intro')}>
                        <Text style={symptomsStyle.btnText}>Restart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={symptomsStyle.background}>
                {this.state.step === 'intro' ? this.Intro() : null}
                {this.state.step === 'fever' ? this.FeverStatus() : null}
                {this.state.step === 'temperature' ? this.TempStatus() : null}
                {this.state.step === 'done' ? this.FinalStatus() : null}
            </View>
        );
    }

};

export default Symptoms;
