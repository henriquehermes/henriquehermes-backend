const express = require('express');
const ProjectsController = require('./controllers/Projects');
const ProjectController = require('./controllers/Project');

const routes = express.Router();

routes.get('/projects', ProjectsController.index);
routes.get('/projects/:projectId', ProjectsController.findOne);
routes.put('/projects/:projectId', ProjectsController.updateOne);
routes.delete('/projects/:projectId', ProjectsController.deleteOne);

routes.post('/project', ProjectController.store);

module.exports = routes;
