'use strict'

exports.get = async (request, h) => {
  const id = await request.server.app.ipfs.id({
    signal: request.app.signal
  })
  return h.response({
    ID: id.id,
    PublicKey: id.publicKey,
    Addresses: id.addresses,
    AgentVersion: id.agentVersion,
    ProtocolVersion: id.protocolVersion
  })
}
