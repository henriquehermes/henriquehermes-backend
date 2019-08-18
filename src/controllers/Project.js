const Project = require('../model/Project');

module.exports = {
  async store(req, res) {
    const { data } = req.body;

    try {
      const nameProject = await Project.findOne({ name: data.name });
      if (nameProject) {
        return res.status(400).send({
          message: 'Project name already exist',
        });
      }

      const project = await Project.create(data);

      return res.json(project);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
};
