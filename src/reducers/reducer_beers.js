import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  REQUEST_SIMILAR,
  SIMILAR_SUCCESS,
  SIMILAR_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  isFetchingSimiliar: false,
  beersArray: [],
  similarBeersArray: [],
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
    case REQUEST_SIMILAR:
      return {
        ...state,
        isFetchingSimiliar: true,
      };
    case SIMILAR_SUCCESS:
      return {
        ...state,
        isFetchingSimiliar: false,
        similarBeersArray: [ ...action.beers],
      };
    case SIMILAR_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}
