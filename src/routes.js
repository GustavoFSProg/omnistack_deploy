const express = require('express')
const routes = express.Router()
const ongController = require('../src/controllers/ong-controller')
const incidentsController = require('../src/controllers/incident-controller')
const profileController = require('../src/controllers/profile-controller')
const sessionController = require('../src/controllers/session-controller')
const { celebrate, Segments, Joi } = require('celebrate')

routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  ongController.create
)
routes.get('/ongs', ongController.get)

routes.post('/incidents', incidentsController.create)
routes.get(
  '/incidents/all',
  celebrate({
    [Segments.QUERY]: Joi.object({
      page: Joi.number(),
    }).unknown(),
  }),
  incidentsController.index
)
routes.get('/incidents', incidentsController.get)
routes.get('/incidents', incidentsController.getById)
routes.get('/inc/:id', incidentsController.getByIncident)
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  incidentsController.delete
)

routes.get(
  '/profile/:id',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  profileController.getIncidentsByOngId
)

routes.post('/session', sessionController.post)

module.exports = routes
