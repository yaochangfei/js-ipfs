'use strict'

const Multiaddr = require('multiaddr')
const configure = require('../lib/configure')
const toUrlSearchParams = require('../lib/to-url-search-params')

module.exports = configure(api => {
  return async (addr, options = {}) => {
    if (addr && typeof addr === 'object' && !Multiaddr.isMultiaddr(addr)) {
      options = addr
      addr = null
    }

    const res = await api.post('bootstrap/rm', {
      timeout: options.timeout,
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: addr,
        ...options
      })
    })

    return res.json()
  }
})
