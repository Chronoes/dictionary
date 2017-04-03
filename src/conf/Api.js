export class ApiError extends Error {
  constructor(message, token) {
    super(message);
    this.token = token;
  }
}

export default class Api {
  static constructError(res) {
    return res.json()
    .then(({ message, token }) => Promise.reject(new ApiError(message, token)));
  }

  constructor(origin, prefix, options = {}) {
    this.origin = origin;
    this.prefix = prefix;
    this.defaultOptions = {
      ...options,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8;',
        Accept: 'application/json; charset=UTF-8;',
        ...options.headers,
      },
    };
  }

  constructUrl(resource, query = {}) {
    const url = new URL(`${this.prefix}${resource}`, this.origin);
    Object.keys(query).forEach((key) => url.searchParams.append(key, query[key]));
    return url;
  }

  fetch(resource, options) {
    return fetch(this.constructUrl(resource, options.query), {
      ...this.defaultOptions,
      ...options,
      headers: {
        ...this.defaultOptions.headers,
        ...options.headers,
      },
    })
    .then((res) => res.ok ? Promise.resolve(res) : Api.constructError(res));
  }
}
