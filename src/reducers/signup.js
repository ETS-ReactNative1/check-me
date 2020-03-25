import {
    SIGNUP
} from './../constants/constant';

const initialState = {
    appError: null
};

const signup = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
};
export default signup;