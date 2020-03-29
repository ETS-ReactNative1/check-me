import {
    STATISTICS,
    CAMER_STATS,
    COUNTRIES,
    API_FAIL
} from './../constants/constant';

const initialState = {
    appError: null,
    statisticsPage: null,
    camerStat: null,
    countryStat: null
};

const statistics = (state = initialState, action) => {
    switch (action.type) {
        case STATISTICS: {
            return {
                ...state,
                statisticsPage: action.data
            }
        }
        case CAMER_STATS: {
            return {
                ...state,
                camerStat: action.data
            }
        }
        case COUNTRIES: {
            return {
                ...state,
                countryStat: action.data
            }
        }
        case API_FAIL: {
            return {
                ...state
            }
        }
        default:
            return state;
    }
};
export default statistics;