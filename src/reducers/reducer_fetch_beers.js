import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  beersArray: [],
  errorMessage: '',
  skip: 0,
  limit: 0,
  hasMore: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        skip: action.skip,
        limit: action.limit,
        hasMore: true,
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        beersArray: state.beersArray.concat(action.beers),
        hasMore: action.hasMore,
      });
    case FETCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.errorMessage,
        hasMore: false,
      });
    default:
      return state;
  }
}
