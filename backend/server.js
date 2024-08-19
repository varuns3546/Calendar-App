require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

const dayRoutes = require('./routes/days')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/days', dayRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

let currentDate = new Date();

// Get the date components
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // January is 0, so we add 1
let day = currentDate.getDate();

// Get the time components
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

// Construct the date string in the desired format
let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

console.log(formattedDate);
