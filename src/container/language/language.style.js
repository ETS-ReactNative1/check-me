import { StyleSheet } from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const languageStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
      },
      Modalbody: {
        marginTop: '30%',
        height: 200,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      languageItem: {

      },
      flag: {
          width: 30,
          height: 30,
      },
      languageHorizontal: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 100,
          marginVertical: 10,
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        fontWeight: "bold",
        fontSize: fontTheme.text16,
      },
      modalText: {
        fontSize: fontTheme.text16,
        marginBottom: 10,
      }
});

export default languageStyle;