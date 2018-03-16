import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const requestFetch = (page, limit) => ({
  type: FETCH_REQUEST,
  page: page + limit,
  limit,
});

export const fetchSuccess = beers => ({
  type: FETCH_SUCCESS,
  beers,
  hasMore: beers.length > 0,
});

export const requestError = error => ({
  type: FETCH_FAILURE,
  errorMessage: error,
});

export function fetchBeers(page, limit) {
  return dispatch => {
    dispatch(requestFetch(page, limit));
    return axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
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
