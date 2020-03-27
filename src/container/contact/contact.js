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
    Linking,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from './../../assets/theme/color';
import contactStyle from './contact.style';
import { Actions } from 'react-native-router-flux';

const makeCall = (numnber) => {
    Linking.openURL(`tel:${numnber}`);
}

function Contact() {
    return (
        <View style={contactStyle.background}>
            <ScrollView>
            <Text style={contactStyle.title}>Contact and Resources</Text>
            <Image style={contactStyle.logoImg} source={require('./../../assets/images/home.png')} />
                <View style={contactStyle.helpCard}>
                    <View style={contactStyle.helpTopSection}>
                        <Text style={contactStyle.helpTopTitle}>Emergency Contact</Text>
                    </View>
                    <View style={contactStyle.helpBottomSection}>
                        <Text style={contactStyle.helpDesc}>Emergency contact in Cameroon</Text>
                        <View style={contactStyle.numberSection}>
                            <Text style={contactStyle.sos}>1510</Text>
                            <TouchableOpacity onPress={() => makeCall(670207776)}>
                                <Icon name="phone" size={30} color={theme.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={contactStyle.helpCard}>
                    <View style={contactStyle.helpTopSection}>
                        <Text style={contactStyle.helpTopTitle}>Ministry of Public Health</Text>
                    </View>
                    <View style={contactStyle.helpBottomSection}>
                        <Text style={contactStyle.helpDesc}>Emergency contact in Cameroon</Text>
                        <View style={contactStyle.numberSection}>
                            <Text style={contactStyle.sos}>Minesup</Text>
                            <TouchableOpacity onPress={() => Actions.webview({url:'https://www.who.int/'})}>
                                <Icon name="globe" size={30} color={theme.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={contactStyle.helpCard}>
                    <View style={contactStyle.helpTopSection}>
                        <Text style={contactStyle.helpTopTitle}>World Health Organization</Text>
                    </View>
                    <View style={contactStyle.helpBottomSection}>
                        <Text style={contactStyle.helpDesc}>Emergency contact in Cameroon</Text>
                        <View style={contactStyle.numberSection}>
                            <Text style={contactStyle.sos}>1510</Text>
                            <TouchableOpacity onPress={() => makeCall(670207776)}>
                                <Icon name="globe" size={30} color={theme.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={contactStyle.helpCard}>
                    <View style={contactStyle.helpTopSection}>
                        <Text style={contactStyle.helpTopTitle}>Center of Diseases Control and Prevention</Text>
                    </View>
                    <View style={contactStyle.helpBottomSection}>
                        <Text style={contactStyle.helpDesc}>Emergency contact in Cameroon</Text>
                        <View style={contactStyle.numberSection}>
                            <Text style={contactStyle.sos}>1510</Text>
                            <TouchableOpacity onPress={() => makeCall(670207776)}>
                                <Icon name="globe" size={30} color={theme.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Contact;
