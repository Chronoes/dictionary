import { ApiError } from './Api';

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
  return success([
    {
      wordId: 1,
      userId: 1,
      langCode: 2,
      wordTypeCode: 3,
      word: 'hey',
      pronounciation: 'hey',
      declension: null,
      description: 'tervitus',
      translation: 'tere',
      example: 'hey lorem ipsum dolor sit amet',
    },
    {
      wordId: 2,
      userId: 1,
      langCode: 1,
      wordTypeCode: 3,
      word: 'what',
      pronounciation: 'what',
      declension: null,
      description: 'küsimus',
      translation: 'mida',
      example: 'mida lorem ipsum dolor sit amet',
    },
  ]);
}
