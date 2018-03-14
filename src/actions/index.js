import axios from 'axios';

export const SEARCH_STARTED = 'SEARCH_STARTED';
export const FETCH_BEER = 'FETCH_BEER';

const myProxyServer = 'https://elminster-white-cors-anywhere.herokuapp.com/';
const appID = 'a7f201cb';
const appKey = 'a1c054c16e7240f958694b6f821336aa';

export function searchStarted() {
  return {
    type: SEARCH_STARTED,
    payload: true,
  };
}

export function fetchRecipesAndPage(ingredients, page) {
  const url = `${myProxyServer}https://api.edamam.com/search?q=${ingredients}
  &app_id=${appID}&app_key=${appKey}&from=${page}&to=${page + 99}`;
  const request = axios.get(url);
  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_BEER, payload: data });
    });
    // .catch(error => {});
  };
}
