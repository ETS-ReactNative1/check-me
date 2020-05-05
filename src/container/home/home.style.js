import {StyleSheet} from 'react-native';
import theme from './../../assets/theme/color';
import fontTheme from '../../assets/theme/font';

const homeStyle = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    paddingBottom: 5,
  },
  titleText: {
    color: theme.white,
    textAlign: 'right',
    fontSize: 20,
    marginLeft: '30%',
    marginRight: '5%',
    marginTop: '15%',
    fontFamily: 'Roboto-Regular',
  },
  cardSection: {
    backgroundColor: theme.white,
    paddingVertical: 5,
    marginHorizontal: 30,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  cardLeftSide: {
    width: '65%',
  },
  cardRightSide: {
    width: 120,
    height: 120,
    resizeMode: "cover",
  },
  cardTitle: {
    fontSize: fontTheme.text16,
    marginVertical: 10,
    color: theme.primary,
    fontFamily: 'Roboto-Medium',
  },
  cardScrollSection: {
    marginTop: 20,
  },
  cardDesc: {
    fontFamily: 'Roboto-Light',
  },
  refresh: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  language: {
    textAlign: 'right',
    marginTop: 50,
    marginRight: '5%',
  },
});

export default homeStyle;
