/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as Progress from 'react-native-progress';

import splashStyle from './splash.style';
import theme from './../../assets/theme/color';

function Risk() {
    useEffect(() => {
        setTimeout(() => Actions.home(), 3000);
    });
    return (
        <View style={splashStyle.background}>
            <View>
                <Text style={splashStyle.title}>COVID-KNOW</Text>
                <Progress.Bar
                    progress={0.3}
                    width={150}
                    color={theme.white}
                    indeterminate={true}
                    indeterminateAnimationDuration={3000}
                />
            </View>
        </View>
    );
};

export default Risk;
