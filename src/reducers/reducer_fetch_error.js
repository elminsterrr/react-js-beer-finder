import { FETCH_ERROR } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case FETCH_ERROR:
      return action.payload;
    default:
      return state;
  }
}
