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
                <View style={singleItemStyle.verticalAlignment}>
                    <View>
                        <Image style={singleItemStyle.cardRightSide} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/fever.png' }} />
                        <Text style={singleItemStyle.subheading}>{data.symptom_one}</Text>
                    </View>
                    <View>
                        <Image style={singleItemStyle.cardRightSide} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/tiredness.png' }} />
                        <Text style={singleItemStyle.subheading}>{data.symptom_two}</Text>
                    </View>
                </View>
                <View style={singleItemStyle.verticalAlignment}>
                    <View>
                        <Image style={singleItemStyle.cardRightSide} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/cough.png' }} />
                        <Text style={singleItemStyle.subheading}>{data.symptom_three}</Text>
                    </View>
                    <View>
                        <Image style={singleItemStyle.cardRightSide} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/shortness.png' }} />
                        <Text style={singleItemStyle.subheading}>{data.symptom_four}</Text>
                    </View>
                </View>

                <View style={singleItemStyle.verticalAlignment}>
                    <View>
                        <Image style={singleItemStyle.cardRightSide} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/pain.png' }} />
                        <Text style={singleItemStyle.subheading}>{data.symptom_five}</Text>
                    </View>
                    <View>
                        <Image style={singleItemStyle.cardRightSide} source={{ uri: 'https://raw.githubusercontent.com/Cressence/images/master/sore.png' }} />
                        <Text style={singleItemStyle.subheading}>{data.symptom_six}</Text>
                    </View>
                </View>

                <View>
                    <Text style={singleItemStyle.subheading}>{data.symptom_seven}</Text>
                </View>
                <Image style={singleItemStyle.cardRightSide} source={{ uri: 'https://www.afro.who.int/sites/default/files/Coronavirus%20Social%20media%20cards/Facebook/2.png' }} />
            </ScrollView>
        </View>
    );
};

export default SingleItem;
