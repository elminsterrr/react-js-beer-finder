import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
  isFetching: false,
  beersArray: [],
  errorMessage: '',
  page: 0,
  limit: 0,
  hasMore: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        page: action.page,
        limit: action.limit,
        hasMore: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        beersArray: [...state.beersArray, ...action.beers],
        hasMore: action.hasMore,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
        hasMore: false,
      };
    default:
      return state;
  }
}
