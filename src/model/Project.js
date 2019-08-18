const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    avatar: {
      type: String,
      required: true,
    },
    images: [{ type: String }],
    gitURL: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updateAt
  },
);

module.exports = model('Project', ProjectSchema);
