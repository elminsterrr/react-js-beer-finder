import { combineReducers } from 'redux';
import FetchBeerReducer from './reducer_fetch_beer';

const rootReducer = combineReducers({
  beer: FetchBeerReducer,
});

export default rootReducer;
