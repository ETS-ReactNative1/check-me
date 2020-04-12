/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import riskStyle from './risk.style';

function Risk(props) {
    useEffect(() => {
        props.navigation.setParams({
            title: props.risk.title,
        })
    }, []);
    const data = props.risk;
    return (
        <View style={riskStyle.background}>
            <ScrollView>
                <Text style={riskStyle.description}>{data.descr}</Text>
                <View>
                    {
                        data.source.map((item, index) => {
                            return (<Text style={riskStyle.source} key={index}>{item}</Text>)
                        })
                    }
                </View>
                <View style={riskStyle.points}>
                    <Text style={riskStyle.subheading}>{data.risk_one}</Text>
                    <TouchableOpacity style={riskStyle.learnContainer} onPress={() => Actions.webview({ url: data.risk_one_link, title: data.risk_one })}>
                        <Text style={riskStyle.learnText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
                <View style={riskStyle.points}>
                    <Text style={riskStyle.subheading}>{data.risk_two}</Text>
                    <TouchableOpacity style={riskStyle.learnContainer} onPress={() => Actions.webview({ url: data.risk_two_link, title: data.risk_two })}>
                        <Text style={riskStyle.learnText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
                <View style={riskStyle.points}>
                    <Text style={riskStyle.subheading}>{data.risk_three}</Text>
                    <TouchableOpacity style={riskStyle.learnContainer} onPress={() => Actions.webview({ url: data.risk_three_link, title: data.risk_three })}>
                        <Text style={riskStyle.learnText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
                <View style={riskStyle.points}>
                    <Text style={riskStyle.subheading}>{data.risk_four}</Text>
                    <TouchableOpacity style={riskStyle.learnContainer} onPress={() => Actions.webview({ url: data.risk_four_link, title: data.risk_four })}>
                        <Text style={riskStyle.learnText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
                <View style={riskStyle.points}>
                    <Text style={riskStyle.subheading}>{data.risk_five}</Text>
                    <TouchableOpacity style={riskStyle.learnContainer} onPress={() => Actions.webview({ url: data.risk_four_link, title: data.risk_four })}>
                        <Text style={riskStyle.learnText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Risk;
