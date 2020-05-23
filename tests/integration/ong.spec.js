const app = require('../../app')
const request = require('supertest')
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'AMPART',
      email: 'ampart@gmail.com',
      whatsapp: '12345678901',
      city: 'Canoas',
      uf: 'RS',
    })
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
