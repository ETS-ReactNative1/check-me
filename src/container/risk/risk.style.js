import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const riskStyle = StyleSheet.create({
    background: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    description: {
        fontSize: fontTheme.text14,
        fontFamily: 'Roboto-Regular',
        marginBottom: 10,
    },
    source: {
        fontSize: fontTheme.small,
        fontFamily: 'Roboto-Italic',
    },
    points: {
        marginVertical: 10,
    },
    subheading: {
        fontSize: theme.text14,
        fontFamily: 'Roboto-Bold',
        marginVertical: 5,
    },
    learnContainer: {
        marginVertical: 5,
        backgroundColor: theme.primary,
        paddingVertical: 2,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    learnText: {
        color: theme.white,
        textDecorationColor: theme.primary,
    },
});

export default riskStyle;