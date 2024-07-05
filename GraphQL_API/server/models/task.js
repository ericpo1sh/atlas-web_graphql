const mongoose = require('mongoose');
const { description } = require('../schema/schema');
const schema = mongoose.schema;

const taskSchema = new schema({
  title: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectId: {
    type: schema.Types.ObjectId,
    ref: 'Project',
    required: true
  }
})

module.exports = mongoose.model('Task', taskSchema)
