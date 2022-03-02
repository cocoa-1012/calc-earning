import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];

const composeEnhancer = () => {
  if (process.env.NODE_ENV === 'development') {
    const devTool =
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();
    return compose(applyMiddleware(...middleware), devTool);
  }
  return compose(applyMiddleware(...middleware));
};

const store = createStore(rootReducer, composeEnhancer());

export default store;
