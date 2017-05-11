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

  constructor(origin, prefix, options) {
    this.origin = origin;
    this.prefix = prefix;
    this.delayedOptions = options;
  }

  constructUrl(resource, query = {}) {
    const url = new URL(`${this.prefix}${resource}`, this.origin);
    Object.keys(query).forEach((key) => url.searchParams.append(key, query[key]));
    return url;
  }

  fetch(resource, options) {
    const extraOptions = this.delayedOptions() || {};
    return fetch(this.constructUrl(resource, options.query), {
      ...extraOptions,
      ...options,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8;',
        Accept: 'application/json; charset=UTF-8;',
        ...extraOptions.headers,
        ...options.headers,
      },
    })
    .then((res) => res.ok ? Promise.resolve(res) : Api.constructError(res));
  }
}
