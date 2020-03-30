/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useLayoutEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Actions } from 'react-native-router-flux';


import { truncTitle, trunc } from './../../components/functions';
import { getNews } from './../../actions/news';
import theme from './../../assets/theme/color';

import symptomsStyle from './symptoms.style';


const Intro = (data) => {
    const myData = data.data;
    return (
        <View style={symptomsStyle.cardbackground}>
            <Image style={symptomsStyle.symptomImg} source={{ uri: myData.urlToImage }} />
            <View style={symptomsStyle.bottomSection}>
                <Text style={symptomsStyle.question}>{truncTitle(myData.title)}</Text>
                <Text style={symptomsStyle.description}>{trunc(myData.description)}</Text>
                <TouchableOpacity style={symptomsStyle.btn} onPress={() => Actions.webview({ url: myData.url, title: myData.title })}>
                    <Text style={symptomsStyle.btnText}>Learn more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function Symptoms() {
    const {
        newsList
    } = useSelector(state => ({
        newsList: state.news.news,
    }));
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    return (
        <View style={symptomsStyle.background}>
            {
                newsList === null ?
                    <View style={symptomsStyle.refresh}>
                        <ActivityIndicator size="large" color={theme.primary} />
                    </View>
                    :
                    <View>
                        <Text style={symptomsStyle.mainTitle}>Trending News on Coronavirus</Text>
                        <ScrollView>
                            {
                                newsList.map((item, index) => {
                                    return (
                                        <Intro data={item} key={index} />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
            }
        </View>
    );

};

export default Symptoms;
