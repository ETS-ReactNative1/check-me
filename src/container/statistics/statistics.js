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
    Image,
    ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-community/async-storage';

import { getStatisticsData, getCamerData, getWorldData } from './../../actions/statistics';

import statisticsStyle from './statistics.style';
import theme from './../../assets/theme/color';

async function _retrieveData() {
    try {
        const value = await AsyncStorage.getItem('language');
        if (value !== null) {
            return value;
        } else {
            return 'en';
        }
    } catch (error) {
        Alert.alert('Error', error);
    }
};

function Statistics() {
    const {
        statisticsData, camerStatData, countryStatData
    } = useSelector(state => ({
        statisticsData: state.statistics.statisticsPage,
        camerStatData: state.statistics.camerStat,
        countryStatData: state.statistics.countryStat
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        _retrieveData().then((val) => {
            dispatch(getStatisticsData(val));
        });
        dispatch(getCamerData());
        dispatch(getWorldData());
    }, [dispatch]);

    return (
        <View style={statisticsStyle.background}>
            {
                ((statisticsData !== null) && (camerStatData !== null) && (countryStatData !== null)) ?
                    <View>
                        <Text style={statisticsStyle.title}>{statisticsData.title}</Text>
                        {/* <Text style={statisticsStyle.descr}>{statisticsData.desctiption}</Text> */}
                        <View style={[statisticsStyle.countryStat, statisticsStyle.camer]}>
                            <View style={statisticsStyle.countryTop}>
                                <Text style={statisticsStyle.countryName}>{camerStatData.country.toUpperCase()}</Text>
                                <Image style={statisticsStyle.flag} source={{ uri: camerStatData.countryInfo.flag }} />
                            </View>
                            <View style={statisticsStyle.countryTop}>
                                <Text style={statisticsStyle.statsText}>
                                    {statisticsData.cases}: {camerStatData.cases}
                                </Text>
                                <Text>
                                    {statisticsData.death}: {camerStatData.deaths}
                                </Text>
                            </View>

                            <View style={statisticsStyle.countryTop}>
                                <Text style={statisticsStyle.statsText}>
                                    {statisticsData.todayCases}: {camerStatData.todayCases}
                                </Text>
                                <Text>
                                    {statisticsData.todayDeath}: {camerStatData.todayDeaths}
                                </Text>
                            </View>

                            <View style={statisticsStyle.countryTop}>
                                <Text>
                                    {statisticsData.activecases}: {camerStatData.active}
                                </Text>
                                <Text>
                                    {statisticsData.recovered}: {camerStatData.recovered}
                                </Text>
                            </View>

                        </View>
                        <ScrollView>
                            {
                                countryStatData.map((country, index) => {
                                    return (
                                        <View key={index} style={statisticsStyle.countryStat}>
                                            <View style={statisticsStyle.countryTop}>
                                                <Text style={statisticsStyle.countryName}>{country.country.toUpperCase()}</Text>
                                                <Image style={statisticsStyle.flag} source={{ uri: country.countryInfo.flag }} />
                                            </View>
                                            <View style={statisticsStyle.countryTop}>
                                                <Text style={statisticsStyle.statsText}>
                                                    {statisticsData.cases}: {country.cases}
                                                </Text>
                                                <Text>
                                                    {statisticsData.death}: {country.deaths}
                                                </Text>
                                            </View>

                                            <View style={statisticsStyle.countryTop}>
                                                <Text style={statisticsStyle.statsText}>
                                                    {statisticsData.todayCases}: {country.todayCases}
                                                </Text>
                                                <Text>
                                                    {statisticsData.todayDeath}: {country.todayDeaths}
                                                </Text>
                                            </View>

                                            <View style={statisticsStyle.countryTop}>
                                                <Text>
                                                    {statisticsData.activecases}: {country.active}
                                                </Text>
                                                <Text>
                                                    {statisticsData.recovered}: {country.recovered}
                                                </Text>
                                            </View>

                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    :
                    <View style={statisticsStyle.refresh}>
                        <ActivityIndicator size="large" color={theme.primary} />
                    </View>
            }

        </View>
    );
};

export default Statistics;
