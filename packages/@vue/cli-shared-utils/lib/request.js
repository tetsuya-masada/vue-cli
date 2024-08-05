const axios = require('axios')

exports.request = {
  get (url, opts) {
    const reqOpts = {
      method: 'GET',
      timeout: 30000,
      ...opts
    }

    return axios.get(url, reqOpts).then(response => response.data)
  }
}
