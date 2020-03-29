import {
    HELP
} from './../constants/constant';

const initialState = {
    appError: null,
    helpPage: null
};

const help = (state = initialState, action) => {
    switch (action.type) {
        case HELP: {
            return {
                ...state,
                helpPage: action.data
            }
        }
        default:
            return state;
    }
};
export default help;