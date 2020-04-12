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

import supportStyle from './support.style';

function Support(props) {
    useEffect(() => {
        props.navigation.setParams({
            title: props.support.title,
        })
    }, []);
    const data = props.support;
    return (
        <View style={supportStyle.background}>
            <ScrollView>
                <Text style={supportStyle.description}>{data.description}</Text>
                <View>
                    {
                        data.source.map((item, index) => {
                            return (<Text style={supportStyle.source} key={index}>{item}</Text>)
                        })
                    }
                </View>
                <Text style={supportStyle.common}>{data.contact_title}</Text>
                <View>
                    {
                        data.contacts.map((item, index) => {
                            return (
                                <Text key={index} style={supportStyle.subheading}>{item}</Text>
                            )
                        })
                    }

                </View>
                <Text style={supportStyle.common}>{data.support}</Text>
                <Text style={supportStyle.support_descr}></Text>
                <TouchableOpacity style={supportStyle.learnContainer} onPress={() => Actions.webview({ url: data.support_link, title: data.support })}>
                    <Text style={supportStyle.learnText}>Learn More</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Support;
