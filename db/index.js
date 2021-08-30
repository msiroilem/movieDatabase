const { POINT_CONVERSION_COMPRESSED } = require('constants')
const mongoose = require('mongoose')

let MONGODB_URI = ''

if (
  TODO // info here with process.env ask questions about this part
) {
  MONGODB_URI = process.env.MONGODB_URI
} else {
  MONGODB_URI = 'mongodb://127.0.0.1:27017/movieDatabase'
}

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db