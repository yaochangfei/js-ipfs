'use strict'

module.exports = async (request, h) => {
  const { ipfs } = request.server.app
  const version = await ipfs.version({
    signal: request.app.signal
  })

  return h.response({
    Version: version.version,
    Commit: version.commit,
    Repo: version.repo
  })
}
