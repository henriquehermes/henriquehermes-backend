const Project = require('../model/Project');

module.exports = {
  async index(req, res) {
    await Project.find({})
      .then(async item => {
        return res.json(item);
      })
      .catch(e => {
        return res.status(400);
      });
  },

  async findOne(req, res) {
    const { projectId } = req.params;

    await Project.findById(projectId)
      .then(async item => {
        return res.json(item);
      })
      .catch(e => {
        console.log(e);
        return res.status(400);
      });
  },

  async deleteOne(req, res) {
    const { projectId } = req.params;

    await Project.findByIdAndDelete({ _id: projectId })
      .then(async item => {
        return res.sendStatus(200);
      })
      .catch(e => {
        if (e.message) return res.status(500).send(e.message);
        return res.sendStatus(500);
      });
  },

  async updateOne(req, res) {
    const { projectId } = req.params;
    const { data } = req.body;

    const updatedProject = await Project.findByIdAndDelete(projectId, data);

    return res.json(updatedProject);
  },
};
