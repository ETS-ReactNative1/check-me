import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const statisticsStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.white,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    countryStat: {
        marginVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 5,
    },
    title: {
        fontSize: fontTheme.text20,
        textAlign: 'center',
        color: theme.primary,
        marginVertical: 10,
    },
    descr: {
        fontSize: fontTheme.text16,
    },
    countryTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    countryName: {
        fontSize: fontTheme.text20,
        fontWeight: "bold",
        color: theme.primary,
    },
    flag: {
        height: 20,
        width: 40,
    },
    statsData: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statsText: {
        fontSize: fontTheme.text14,
    },
    camer: {
        backgroundColor: theme.light_grey,
    },
    refresh: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default statisticsStyle;