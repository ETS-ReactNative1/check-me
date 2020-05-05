import {DISEASES} from './../constants/constant';

const initialState = {
  appError: null,
  desease: null,
};

const deseases = (state = initialState, action) => {
  switch (action.type) {
    case DISEASES: {
      return {
        ...state,
        desease: action.data.diseases,
      };
    }
    default:
      return state;
  }
};
export default deseases;
