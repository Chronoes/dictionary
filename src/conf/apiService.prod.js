import Api from './Api';

const api = new Api(window.location.origin, '/api/v1', () => ({
  credentials: 'include',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  },
}));


export function search({ keyword, lang_code }) {
  return api.fetch('/words', { query: { keyword, lang_code } });
}
