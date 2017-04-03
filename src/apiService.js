module.exports = (
  process.env.NODE_ENV === 'production' || process.env.REACT_APP_API === 'live' ?
  require('./conf/apiService.prod') :
  require('./conf/apiService.dev')
);
