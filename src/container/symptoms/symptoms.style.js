import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';

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
        fontSize: 12,
    },
    title: {
        fontSize: 20,
        color: theme.white,
        textAlign: 'center',
        marginTop: 7,
    },
    question: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
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
});

export default symptomsStyle;