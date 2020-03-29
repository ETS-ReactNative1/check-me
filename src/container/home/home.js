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
    ImageBackground,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from "react-redux";

import { getHomeData } from './../../actions/home';
import { trunc } from './../../components/functions';

import homeStyle from './home.style';

function Home() {
    const {
        homeData
    } = useSelector(state => ({
        homeData: state.home.homePage,
    }));
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(getHomeData());
    }, [dispatch]);
    return (
        <View style={homeStyle.background}>
            {
                homeData === null ?
                    <View></View>
                    :
                    <ImageBackground source={require('./../../assets/images/background.png')} style={homeStyle.backgroundImage}>
                        <Text style={homeStyle.titleText}>{homeData['home-title']}</Text>
                        <ScrollView style={homeStyle.cardScrollSection}>
                            <TouchableOpacity style={homeStyle.cardSection} onPress={() => Actions.singleItem({symptoms: homeData.symtoms})}>
                                <View style={homeStyle.cardLeftSide}>
                                    <Text style={homeStyle.cardTitle}>{homeData.symtoms.title}</Text>
                                    <Text style={homeStyle.cardDesc}>{trunc(homeData.symtoms.descripton)}</Text>
                                </View>
                                <Image style={homeStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/tiredness.png'}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={homeStyle.cardSection} onPress={() => Actions.prevention({prevention: homeData.prevention})}>
                                <View style={homeStyle.cardLeftSide}>
                                    <Text style={homeStyle.cardTitle}>{homeData.prevention.title}</Text>
                                    <Text style={homeStyle.cardDesc}>{trunc(homeData.prevention.description)}</Text>
                                </View>
                                <Image style={homeStyle.cardRightSide} source={{uri : 'https://raw.githubusercontent.com/Cressence/images/master/prevention.png'}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={homeStyle.cardSection} onPress={() => Actions.risk({risk: homeData.risk})}>
                                <View style={homeStyle.cardLeftSide}>
                                    <Text style={homeStyle.cardTitle}>{homeData.risk.title}</Text>
                                    <Text style={homeStyle.cardDesc}>{trunc(homeData.risk.descr)}</Text>
                                </View>
                                <Image style={homeStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/old.png'}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={homeStyle.cardSection} onPress={() => Actions.support({support: homeData.support})}>
                                <View style={homeStyle.cardLeftSide}>
                                    <Text style={homeStyle.cardTitle}>{homeData.support.title}</Text>
                                    <Text style={homeStyle.cardDesc}>{trunc(homeData.support.description)}</Text>
                                </View>
                                <Image style={homeStyle.cardRightSide} source={{uri: 'https://raw.githubusercontent.com/Cressence/images/master/support.png'}} />
                            </TouchableOpacity>
                        </ScrollView>
                    </ImageBackground>
            }
        </View>
    );
};

export default Home;