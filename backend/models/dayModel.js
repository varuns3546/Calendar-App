const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  tasks:{
    type: Array,
    required: true
  }
  
}, { timestamps: true })

module.exports = mongoose.model('Day', daySchema)