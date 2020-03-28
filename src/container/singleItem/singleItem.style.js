import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const singleItemStyle = StyleSheet.create({
    background: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    cardRightSide: {
        width: 150,
        height: 150,
        resizeMode: "cover",
        alignSelf: 'center',
        marginBottom: 15,
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
    common: {
        marginVertical: 7,
        fontSize: fontTheme.text20,
        color: theme.primary,
    },
    subheading: {
        fontSize: theme.text14,
        fontFamily: 'Roboto-Bold',
        color: theme.primary,
        marginVertical: 5,
    },
});

export default singleItemStyle;