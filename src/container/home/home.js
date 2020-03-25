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
    ImageBackground,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import homeStyle from './home.style';

function Home() {
    return (
        <View style={homeStyle.background}>
            <ImageBackground source={require('./../../assets/images/background.png')} style={homeStyle.backgroundImage}>
                <Text style={homeStyle.titleText}>Be informed on the best ways to protect yourself from Corona virus</Text>
                <ScrollView style={homeStyle.cardScrollSection}>
                    <TouchableOpacity style={homeStyle.cardSection} onPress={() => Actions.singleItem()}>
                        <View style={homeStyle.cardLeftSide}>
                            <Text style={homeStyle.cardTitle}>Symptoms</Text>
                            <Text>Bear claw pie marzipan topping macaroon gummi bears soufflé gummi bears soufflé.</Text>
                        </View>
                        <Image style={homeStyle.cardRightSide} source={require('./../../assets/images/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyle.cardSection}>
                        <View style={homeStyle.cardLeftSide}>
                            <Text style={homeStyle.cardTitle}>Prevention</Text>
                            <Text>Bear claw pie marzipan topping macaroon gummi bears soufflé gummi bears soufflé.</Text>
                        </View>
                        <Image style={homeStyle.cardRightSide} source={require('./../../assets/images/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyle.cardSection}>
                        <View style={homeStyle.cardLeftSide}>
                            <Text style={homeStyle.cardTitle}>Treatment</Text>
                            <Text>Bear claw pie marzipan topping macaroon gummi bears soufflé gummi bears soufflé.</Text>
                        </View>
                        <Image style={homeStyle.cardRightSide} source={require('./../../assets/images/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyle.cardSection}>
                        <View style={homeStyle.cardLeftSide}>
                            <Text style={homeStyle.cardTitle}>What does not help</Text>
                            <Text>Bear claw pie marzipan topping macaroon gummi bears soufflé gummi bears soufflé.</Text>
                        </View>
                        <Image style={homeStyle.cardRightSide} source={require('./../../assets/images/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyle.cardSection}>
                        <View style={homeStyle.cardLeftSide}>
                            <Text style={homeStyle.cardTitle}>More Info</Text>
                            <Text>Bear claw pie marzipan topping macaroon gummi bears soufflé gummi bears soufflé.</Text>
                        </View>
                        <Image style={homeStyle.cardRightSide} source={require('./../../assets/images/home.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Home;
