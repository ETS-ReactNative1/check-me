import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from './../../assets/theme/font';

const symptomsStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.light_grey,
    },
    cardbackground: {
        backgroundColor: theme.white,
        marginHorizontal: '10%',
        flex: 1,
        marginVertical: '10%',
        borderRadius: 20,
    },
    topSection: {
        flex: 1,
        backgroundColor: theme.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bottomSection: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    symptomImg: {
        height: '68%',
        resizeMode: 'contain', 
    },
    step: {
        textAlign: "center",
        color: theme.white,
        marginVertical: 7,
        fontSize: fontTheme.small,
    },
    title: {
        fontSize: fontTheme.text20,
        color: theme.white,
        textAlign: 'center',
        marginTop: 7,
    },
    question: {
        fontSize: fontTheme.text20,
        textAlign: 'center',
        marginVertical: 10,
    },
    description: {
        fontSize: fontTheme.text16,
        textAlign: 'center',
    },
    btn: {
        width: '40%',
        backgroundColor: theme.primary,
        padding: 15,
        borderRadius: 35,
        alignItems: 'center',
        marginTop: 30,
    },
    btnText: {
        color: theme.white,
    },
    result: {
        fontSize: fontTheme.text20,
        color: theme.primary,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default symptomsStyle;