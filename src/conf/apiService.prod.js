import Api from './Api';

const api = new Api(window.location.origin, '/api', () => ({
  credentials: 'include',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  },
}));


export function search({ keyword }) {
  return api.fetch('/search', { query: { keyword } });
}
