/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useLayoutEffect } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Linking,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from 'react-native-router-flux';

import theme from './../../assets/theme/color';
import contactStyle from './contact.style';
import { getHelpData } from './../../actions/help';

const makeCall = (numnber) => {
    Linking.openURL(`tel:${numnber}`);
}

function Contact() {
    const {
        helpData
    } = useSelector(state => ({
        helpData: state.help.helpPage,
    }));
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(getHelpData());
    }, [dispatch]);
    return (
        <View style={contactStyle.background}>
            {
                helpData === null ?
                    <View style={contactStyle.refresh}>
                        <ActivityIndicator size="large" color={theme.primary} />
                    </View>
                    :
                    <ScrollView>
                        <Text style={contactStyle.title}>{helpData.help_title}</Text>
                        {/* <Image style={contactStyle.logoImg} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/help.png' }} /> */}
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.emergency.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.emergency.description}</Text>
                                {
                                    helpData.emergency.contacts.map((item, index) => {
                                        return (
                                            <View key={index} style={contactStyle.numberSection}>
                                                <Text style={contactStyle.sos}>{item}</Text>
                                                <TouchableOpacity onPress={() => makeCall(item)}>
                                                    <Icon name="phone" size={30} color={theme.primary} />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.mini_health.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.mini_health.description}</Text>
                                <View style={contactStyle.numberSection}>
                                    <Text style={contactStyle.sos}>{helpData.mini_health.title}</Text>
                                    <TouchableOpacity onPress={() => Actions.webview({ url: helpData.mini_health.link })}>
                                        <Icon name="globe" size={30} color={theme.primary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.who.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.who.description}</Text>
                                <View style={contactStyle.numberSection}>
                                    <Text style={contactStyle.sos}>{helpData.who.title}</Text>
                                    <TouchableOpacity onPress={() => Actions.webview({ url: helpData.who.link })}>
                                        <Icon name="globe" size={30} color={theme.primary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={contactStyle.helpCard}>
                            <View style={contactStyle.helpTopSection}>
                                <Text style={contactStyle.helpTopTitle}>{helpData.cdc.title}</Text>
                            </View>
                            <View style={contactStyle.helpBottomSection}>
                                <Text style={contactStyle.helpDesc}>{helpData.cdc.description}</Text>
                                <View style={contactStyle.numberSection}>
                                    <Text style={contactStyle.sos}>{helpData.cdc.title}</Text>
                                    <TouchableOpacity onPress={() => Actions.webview({ url: helpData.cdc.link })}>
                                        <Icon name="globe" size={30} color={theme.primary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
            }
        </View>
    );
};

export default Contact;
