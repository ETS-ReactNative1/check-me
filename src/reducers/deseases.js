import {DISEASES, DISEASE} from './../constants/constant';

const initialState = {
  appError: null,
  desease: null,
  mainDisease: null,
};

const deseases = (state = initialState, action) => {
  switch (action.type) {
    case DISEASES: {
      return {
        ...state,
        desease: action.data.diseases,
      };
    }
    case DISEASE: {
      console.log(action.data)
      return {
        ...state,
        mainDisease: action.data,
      };
    }
    default:
      return state;
  }
};
export default deseases;
