import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const supportStyle = StyleSheet.create({
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
    common: {
        marginTop: 17,
        fontSize: fontTheme.text20,
        color: theme.primary,
    },
    subheading: {
        fontSize: theme.text14,
        fontFamily: 'Roboto-Bold',
        marginVertical: 5,
    },
    learnContainer: {
        backgroundColor: theme.primary,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    learnText: {
        color: theme.white,
    },
});

export default supportStyle;