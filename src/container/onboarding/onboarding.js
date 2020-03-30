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
    Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Onboarding from 'react-native-onboarding-swiper';

import onboardingStyle from './onboarding.style';
import theme from './../../assets/theme/color';

function OnboardingComponent() {
    return (
        <View style={onboardingStyle.background}>
            <Onboarding
                bottomBarHighlight={false}
                transitionAnimationDuration={0}
                allowFontScaling={false}
                onDone={() => Actions.home()}
                skipToPage={2}
                pages={[
                    {
                        backgroundColor: '#666633',
                        image: <Image style={onboardingStyle.imgStyle} source={require('./../../assets/images/one.png')} />,
                        title: 'Get information on COVID-19',
                        subtitle: 'Reliable information on how to protect yourself from COVID-19',
                    },
                    {
                        backgroundColor: '#663300',
                        image: <Image style={onboardingStyle.imgStyle} source={require('./../../assets/images/two.png')} />,
                        title: 'Support the cause',
                        subtitle: 'Support the Ministry of Public Health in Cameroon to fight against COVID-19',
                    },
                    {
                        backgroundColor: '#5900b3',
                        image: <Image style={onboardingStyle.imgStyle} source={require('./../../assets/images/three.png')} />,
                        title: 'Confirmed Statistics',
                        subtitle: 'Get statistics on the current state of COVID-19 in the world',
                    }
                ]}
            />
        </View>
    );
};

export default OnboardingComponent;
