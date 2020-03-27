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
    TouchableOpacity,
} from 'react-native';
import { data } from './../../components/data';

import statisticsStyle from './statistics.style';

function Stitistics() {
    return (
        <View style={statisticsStyle.background}>
            <Text style={statisticsStyle.title}>Statistics</Text>
            <Text style={statisticsStyle.descr}>This statistics is gotten from some site This statistics is gotten from some site</Text>
            <ScrollView>
                {
                    Object.keys(data).map((country, index) => {
                        const country_data = data[country];
                        const last_item = country_data[country_data.length - 1];
                        return (
                            <TouchableOpacity key={index} style={statisticsStyle.countryStat}>
                                <View style={statisticsStyle.countryTop}>
                                    <Text style={statisticsStyle.countryName}>{country.toUpperCase()}</Text>
                                    <Text style={statisticsStyle.date}>{last_item.date}</Text>
                                </View>
                                <View style={statisticsStyle.countryTop}>
                                    <Text style={statisticsStyle.statsText}>
                                        Confirmed {"\n"}
                                        {last_item.confirmed}
                                    </Text>
                                    <Text>
                                        Death {"\n"}
                                        {last_item.fatal}
                                    </Text>
                                    <Text>
                                        Recovered {"\n"}
                                        {last_item.recovered}
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

        </View>
    );
};

export default Stitistics;
