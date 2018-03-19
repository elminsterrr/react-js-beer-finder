import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const REQUEST_SIMILAR = 'REQUEST_SIMILAR';
export const SIMILAR_SUCCESS = 'SIMILAR_SUCCESS';
export const SIMILAR_FAILURE = 'SIMILAR_FAILURE';

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

export const requestSimilar = () => ({
  type: REQUEST_SIMILAR,
});

export const similarBeersSuccess = beers => ({
  type: SIMILAR_SUCCESS,
  beers,
});

export const similarBeersError = error => ({
  type: SIMILAR_FAILURE,
  errorMessage: error,
});

export function findSimilarBeers(ibu, abv, ebc) {
  return dispatch => {
    dispatch(requestSimilar());
    return axios
      .get(
        `https://api.punkapi.com/v2/beers?ibu_gt=${ibu}&abv_gt=${abv}&ebc_gt=${ebc}`
      )
      .then(response => {
        const { data } = response;
        if (response.status === 200) {
          dispatch(similarBeersSuccess(data));
        } else {
          dispatch(similarBeersError(data.error));
        }
      })
      .catch(error => dispatch(similarBeersError(error)));
  };
}
