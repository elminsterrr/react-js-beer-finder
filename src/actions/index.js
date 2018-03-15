import axios from 'axios';

export const FETCH_BEERS = 'FETCH_BEERS';

export function fetchBeers() {
  const url = `https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6`;

  const request = axios.get(url);

  return dispatch => {
    request.then(({ data }) => {
      setTimeout(() => {
        dispatch({ type: FETCH_BEERS, payload: data });
      }, 2000);
    });
    // .catch(error => {});
  };
}
