import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const requestError = error => ({
  type: FETCH_FAILURE,
  errorMessage: error,
});

export const fetchSuccess = beers => ({
  type: FETCH_SUCCESS,
  beers,
  hasMore: beers.length > 0,
});

export const requestFetch = (skip, limit) => ({
  type: FETCH_REQUEST,
  skip: skip + limit,
  limit,
});

export function fetchBeers(skip, limit) {
  return dispatch => {
    dispatch(requestFetch(skip, limit));
    return axios
      .get(`https://api.punkapi.com/v2/beers?page=${skip}&per_page=20`)
      .then(response => {
        const { data } = response;
        if (response.status === 200) {
          dispatch(fetchSuccess(data));
        } else {
          dispatch(requestError(data.error));
        }
      })
      .catch(error => dispatch(requestError(error)));
  };
}
