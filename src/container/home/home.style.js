import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';

const homeStyle = StyleSheet.create({
    background: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
    },
    titleText: {
        color: theme.white,
        textAlign: 'right',
        fontSize: 20,
        marginLeft: '30%',
        marginRight: '5%',
        marginTop: '30%',
        fontFamily: 'Roboto-Regular',
        // fontWeight: 'bold',
    },
    cardSection: {
        backgroundColor: theme.white,
        paddingVertical: 20,
        marginHorizontal: 30,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 7,
        borderRadius: 10,
    },
    cardLeftSide: {
        width: '60%',
    },
    cardRightSide: {
        width: 100,
        height: 100,
        resizeMode: "cover",
    },
    cardTitle: {
        fontSize: 16,
        marginVertical: 10,
        color: theme.primary,
    },
    cardScrollSection: {
        marginTop: 20,
    },
});

export default homeStyle;