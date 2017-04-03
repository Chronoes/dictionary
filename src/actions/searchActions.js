import * as api from '../apiService';

export function updateSearchForm(key, value) {
  return { type: 'SET_SEARCH_FORM_VALUE', key, value };
}

export function sendSearchForm({ searchBox }) {
  return (dispatch) => {
    dispatch({ type: 'SEND_SEARCH_FORM' });
    return api.search({ keyword: searchBox })
    .then((res) => res.json())
    .then((results) => dispatch({ type: 'SEND_SEARCH_FORM_SUCCESS', results }))
    .catch(({ message, token }) => dispatch({ type: 'SEND_SEARCH_FORM_FAILURE', error: message, token }));
  };
}
