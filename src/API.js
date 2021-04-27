const got = require('got');

class API {
  /**
   * Base uri to request
   * @type {string}
   */
  static baseUri = 'https://rustcheatcheck.ru/panel/api';

  /**
   * Class constructor
   * @param {{
   *  apiKey: string,
   *  apiUrl?: string
   * }} param0 
   */
  constructor({ apiKey, apiUrl }) {
    if (!apiKey) {
      throw new Error('You should provide valid API key!');
    }

    this.apiKey = apiKey;
    this.apiUrl = apiUrl || API.baseUri;
  }

  /**
   * Base api call
   * @param {string} method
   * @param {any?} opts 
   */
  async request(method, opts = {}) {
    const result = await got(this.apiUrl, {
      searchParams: {
        ...opts,

        action: method,
        key: this.apiKey
      }
    }).catch(e => { throw new Error(`API Internal Error. Uri: ${this.apiUrl}`, e) });

    try {
      const obj = JSON.parse(result.body);

      return {
        status: obj.status == 'success',
        data: obj.status != 'success'
          ? obj.errorreason
          : obj
      }
    }
    catch (e) {
      throw new Error('API answer serialization error')
    }
  }
  
  /**
   * Get user data
   * @param {string} userId 
   */
  async getUserData(userId) {
    if (!userId) {
      throw new Error('You should provide userId of player to check!');
    }

    const result = await this.request('getInfo', {
      player: userId 
    });

    return result;
  }
}

module.exports = API;