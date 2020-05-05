import {combineReducers} from 'redux';
import home from './home';
import help from './help';
import statistics from './statistics';
import news from './news';
import deseases from './deseases';

export default combineReducers({
  home,
  help,
  statistics,
  news,
  deseases,
});
