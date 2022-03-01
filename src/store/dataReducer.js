import * as types from './types';
const initState = {};
const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_SOCIAL_MEDIA_DATA: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default dataReducer;
