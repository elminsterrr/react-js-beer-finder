import { FETCH_BEERS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BEERS:
      if (action.payload.length === 0) {
        return [...state, null];
      }

      return [...state, ...action.payload];
    default:
      return state;
  }
}
