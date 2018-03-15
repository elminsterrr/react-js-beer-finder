import axios from 'axios';

export const FETCH_BEERS = 'FETCH_BEERS';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchBeers() {
  const url = `https://api.punkapi.com/v2/beers?per_page=20`;

  const request = axios.get(url);

  return dispatch => {
    request
      .then(({ data }) => {
        setTimeout(() => {
          dispatch({ type: FETCH_BEERS, payload: data });
        }, 2000);
      })
      .catch(() => {
        dispatch({ type: FETCH_ERROR, payload: true });
      });
  };
}
