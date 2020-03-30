import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from './../../assets/theme/font';

const symptomsStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.light_grey,
        paddingTop: 20,
    },
    mainTitle: {
        color: theme.primary,
        fontSize: fontTheme.text20,
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        marginVertical: 20,
    },
    cardbackground: {
        backgroundColor: theme.white,
        marginHorizontal: 9,
        marginVertical: 7,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
    },
    bottomSection: {
        paddingVertical: 5,
        paddingLeft: 10,
        paddingRight: 5,
        width: '60%',
        height: '100%',
    },
    symptomImg: {
        resizeMode: 'cover', 
        width: '40%',
        height: '100%',
    },
    question: {
        fontSize: fontTheme.text14,
        marginVertical: 5,
        fontFamily: 'Roboto-Bold',
    },
    description: {
        fontSize: fontTheme.text14,
    },
    btn: {
        marginRight: 25,
    },
    btnText: {
        color: theme.primary,
        textAlign: 'right',
    },
    refreshLoader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%',
    },
});

export default symptomsStyle;