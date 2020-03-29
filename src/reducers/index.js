import { combineReducers } from 'redux';
import home from './home';
import help from './help';
import statistics from './statistics';
import news from './news';

export default combineReducers({
    home,
    help,
    statistics,
    news
});