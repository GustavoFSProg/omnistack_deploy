const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body
    const id = generateUniqueId()

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    return res.status(201).send({ id: id })
  },

  async get(req, res) {
    const ongs = await connection('ongs').select('*')
    return res.json(ongs)
  },
}
