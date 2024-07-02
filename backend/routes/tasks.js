const express = require('express')
const {
  getTasks, 
  getTask, 
  createTask, 
  deleteTask, 
  updateTask
} = require('../controllers/taskController.js')

const router = express.Router()

// GET all tasks
router.get('/', getTasks)

// GET a single Task
router.get('/:id', getTask)

// POST a new Task
router.post('/', createTask)

// DELETE a Task
router.delete('/:id', deleteTask)

// UPDATE a Task
router.patch('/:id', updateTask)

module.exports = router