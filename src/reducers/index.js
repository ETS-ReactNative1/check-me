import { combineReducers } from 'redux';
import home from './home';
import help from './help';
import statistics from './statistics';

export default combineReducers({
    home,
    help,
    statistics
});