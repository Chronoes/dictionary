import { ApiError } from './Api';

function success(payload) {
  return Promise.resolve({
    ok: true,
    json() {
      return Promise.resolve(payload);
    },
  });
}

function failure(message, token) {
  return Promise.reject(new ApiError(message, token));
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
      description: 'küsimus',
      translation: 'mida',
      example: 'mida lorem ipsum dolor sit amet',
    },
  ]);
}
