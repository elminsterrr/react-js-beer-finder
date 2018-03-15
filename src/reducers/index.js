import { combineReducers } from 'redux';
import FetchBeersReducer from './reducer_fetch_beers';
import FetchErrorReducer from './reducer_fetch_error';

const rootReducer = combineReducers({
  beers: FetchBeersReducer,
  error: FetchErrorReducer,
});

export default rootReducer;
