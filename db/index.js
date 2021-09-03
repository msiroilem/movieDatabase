const mongoose = require('mongoose')
require('dotenv').config()
let MONGODB_URI = ''

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/todo_tracker'

// if (
//   process.env.NODE_ENV === 'production' ||
//   process.env.NODE_ENV === 'localserver-productiondb'
// ) {
//   MONGODB_URI = process.env.MONGODB_URI
// } else {
//   MONGODB_URI = 'mongodb://127.0.0.1:27017/movieDatabase'
// }

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
