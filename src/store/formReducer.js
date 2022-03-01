import * as types from './types';
const initState = {
  instagram: '',
  tiktok: '',
  youtube: '',
};
const formReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_INPUT_FORM_DATA: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export default formReducer;
