const mongoose = require('mongoose')
const Task = require('../models/taskModel')

const Schema = mongoose.Schema

const daySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  tasks:{
    type: [Task],
    required: true
  }
  
}, { timestamps: true })

module.exports = mongoose.model('Day', daySchema)