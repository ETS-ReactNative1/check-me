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

import preventionStyle from './prevention.style';

function Prevention(props) {
    useEffect(() => {
        props.navigation.setParams({
            title: props.prevention.title,
        })
    }, []);
    const data = props.prevention;
    return (
        <View style={preventionStyle.background}>
            <ScrollView>
                <Text style={preventionStyle.description}>{data.description}</Text>
                <View>
                    {
                        data.source.map((item, index) => {
                            return (<Text style={preventionStyle.source} key={index}>{item}</Text>)
                        })
                    }
                </View>
                <View style={preventionStyle.points}>
                    {
                        data.preventions.map((item, index) => {
                            return (
                                <Text key={index} style={preventionStyle.subheading}>{item}</Text>
                            )
                        })
                    }
                </View>
                <TouchableOpacity style={preventionStyle.learnContainer} onPress={() => Actions.webview({url: data.more_link, title: props.prevention.title})}>
                    <Text style={preventionStyle.learnText}>Learn More</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Prevention;
