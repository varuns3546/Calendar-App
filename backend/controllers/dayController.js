const Day = require('../models/dayModel')
const mongoose = require('mongoose')

// get all days
const getDays = async (req, res) => {
  const days = await Day.find({}).sort({createdAt: -1})

  res.status(200).json(days)
}

// get a single day
const getDay = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such day'})
  }

  const day = await Day.findById(id)

  if (!day) {
    return res.status(404).json({error: 'No such day'})
  }

  res.status(200).json(day)
}

// create a new day
const createDay = async (req, res) => {
  const {date, tasks} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('date')
  }
  if (!load) {
    emptyFields.push('tasks')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const day = await Day.create({ date, tasks })
    res.status(200).json(day)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a day
const deleteDay = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such day'})
  }

  const day = await Day.findOneAndDelete({_id: id})

  if(!day) {
    return res.status(400).json({error: 'No such day'})
  }

  res.status(200).json(day)``
}

// update a day
const updateDay = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such day'})
  }

  const day = await Day.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!day) {
    return res.status(400).json({error: 'No such day'})
  }

  res.status(200).json(day)
}

module.exports = {
  getDays,
  getDay,
  createDay,
  deleteDay,
  updateDay
}