import { ApiError } from './Api';

import searchJson from './mockData/search.json';

const MIN_NETWORK_TIME = 20;
const MAX_NETWORK_TIME = 1000;

function simulateNetworkConnection(callback) {
  setTimeout(callback, MIN_NETWORK_TIME + Math.floor(Math.random() * ((MAX_NETWORK_TIME - MIN_NETWORK_TIME) + 1)));
}

function success(payload) {
  return new Promise((resolve) => {
    simulateNetworkConnection(() => {
      resolve({
        ok: true,
        json() {
          return Promise.resolve(payload);
        },
      });
    });
  });
}

function failure(message, token) {
  return new Promise((_, reject) => {
    simulateNetworkConnection(() => {
      reject(new ApiError(message, token));
    });
  });
}

/* eslint-disable no-console */
export function search({ keyword }) {
  if (!keyword) {
    return failure(`Payload was ${keyword}`, 'error');
  }
  return success(searchJson);
}
