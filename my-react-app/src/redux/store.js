import { createStore, combineReducers } from 'redux';
import currentComponentReducer from './reducer';

const rootReducer = combineReducers({
  currentComponent: currentComponentReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
