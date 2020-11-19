const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionControler = require('./controllers/SessionController');

const routes = express.Router();



routes.post('/session', SessionControler.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs',  OngController.create);


routes.get('/incidents',  IncidentsController.index);
routes.post('/incidents',  IncidentsController.create);
routes.delete('/incidents/:id',  IncidentsController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;