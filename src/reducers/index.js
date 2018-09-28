import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import inputReducer from './inputReducer';

const counterApp = combineReducers({
  counterReducer,
  inputReducer
})

export default counterApp
