const mongoose = require('mongoose');
const { description } = require('../schema/schema');
const schema = mongoose.schema;

const projectSchema = new schema({
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
  }
})

module.exports = mongoose.model('Project', projectSchema)
