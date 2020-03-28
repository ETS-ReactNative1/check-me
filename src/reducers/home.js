import {
    HOME
} from './../constants/constant';

const initialState = {
    appError: null,
    homePage: null
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case HOME: {
            return {
                ...state,
                homePage: action.data
            }
        }
        default:
            return state;
    }
};
export default home;