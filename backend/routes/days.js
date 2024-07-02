const express = require('express')
const {
  getDays, 
  getDay, 
  createDay, 
  deleteDay, 
  updateDay
} = require('../controllers/dayController')

const router = express.Router()

// GET all days
router.get('/', getDays)

// GET a single Day
router.get('/:id', getDay)

// POST a new Day
router.post('/', createDay)

// DELETE a Day
router.delete('/:id', deleteDay)

// UPDATE a Day
router.patch('/:id', updateDay)

module.exports = router