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
} from 'react-native';

import singleItemStyle from './singleItem.style';

function SingleItem(props) {
    useLayoutEffect(() => {
        props.navigation.setParams({
            title: props.symptoms.title,
        })
    }, []);
    const data = props.symptoms;
    return (
        <View style={singleItemStyle.background}>
            <ScrollView>
                <Text style={singleItemStyle.description}>{data.descripton}</Text>
                <View>
                    {
                        data.source.map((item, index) => {
                            return (<Text style={singleItemStyle.source} key={index}>{item}</Text>)
                        })
                    }
                </View>
                <Text style={singleItemStyle.common}>{data.common_title}</Text>
                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_one}</Text>
                    <Image style={singleItemStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/fever.png'}} />
                </View>
                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_two}</Text>
                    <Image style={singleItemStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/tiredness.png'}} />
                </View>
                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_three}</Text>
                    <Image style={singleItemStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/cough.png'}} />
                </View>
                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_four}</Text>
                    <Image style={singleItemStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/shortness.png'}} />
                </View>
                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_five}</Text>
                    <Image style={singleItemStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/pain.png'}} />
                </View>
                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_six}</Text>
                    <Image style={singleItemStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/sore.png'}} />
                </View>
                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_seven}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default SingleItem;
