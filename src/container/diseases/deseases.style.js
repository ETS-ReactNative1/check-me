import {StyleSheet} from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const deseaseStyle = StyleSheet.create({
  background: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  refresh: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontTheme.text20,
    color: theme.primary,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginTop: 30,
  },
  subTitle: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: fontTheme.text16,
  },
  diseaseContainer: {
    padding: 15,
    backgroundColor: theme.light_grey,
    marginVertical: 6,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1.5,
  },
  diseaseName: {
    fontSize: fontTheme.text14,
  },
});

export default deseaseStyle;
