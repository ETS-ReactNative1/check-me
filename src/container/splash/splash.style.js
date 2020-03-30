import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const splashStyle = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primary,
    },
    title: {
        color: theme.white,
        fontSize: fontTheme.text20,
        fontFamily: 'Roboto-Black',
        marginBottom: 20,
    },
});

export default splashStyle;