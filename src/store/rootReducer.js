import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import formReducer from './formReducer';

// public category Reducer.

const rootReducer = combineReducers({
  form: formReducer,
  data: dataReducer,
});

export default rootReducer;
