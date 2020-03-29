import {
    NEWS, API_FAIL
} from './../constants/constant';

const initialState = {
    appError: null,
    news: null
};

const news = (state = initialState, action) => {
    switch (action.type) {
        case NEWS: {
            return {
                ...state,
                news: action.data.articles
            }
        }
        case API_FAIL: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
};
export default news;