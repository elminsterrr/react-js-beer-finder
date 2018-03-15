import { combineReducers } from 'redux';
import FetchBeersReducer from './reducer_fetch_beers';

const rootReducer = combineReducers({
  beers: FetchBeersReducer,
});

export default rootReducer;
