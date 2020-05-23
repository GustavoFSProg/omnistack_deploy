const connection = require('../database/connection')

module.exports = {
  async getIncidentsByOngId(req, res) {
    const { id } = req.params

    try {
      const data = await connection('incidents').where('ong_id', id).select('*')

      return res.status(200).send(data)
    } catch (error) {
      return res.status(400).send('ERRRoRRRR')
    }
  },
}
